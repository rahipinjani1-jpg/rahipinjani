import { useState, useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';

function parsePath() {
  const path = window.location.pathname;
  if (path === '/' || path === '/home') return { page: 'home', project: null };
  if (path === '/about') return { page: 'about', project: null };
  if (path === '/work') return { page: 'projects', project: null };
  if (path.startsWith('/project/')) {
    const slug = path.slice(9);
    return { page: 'project-' + slug, project: slug };
  }
  return { page: 'home', project: null };
}

function toPath(page) {
  if (page === 'home') return '/';
  if (page === 'projects') return '/work';
  return '/' + page;
}

export default function App() {
  const { page: initPage, project: initProject } = parsePath();
  const [currentPage, setCurrentPage] = useState(initPage);
  const [currentProject, setCurrentProject] = useState(initProject);

  // Load Instagram embed.js once per hard load — never again on SPA navigation
  useEffect(() => {
    if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const onPopState = () => {
      const { page, project } = parsePath();
      setCurrentPage(page);
      setCurrentProject(project);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (page) => {
    history.pushState(null, '', toPath(page));
    setCurrentPage(page);
    setCurrentProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showProject = (slug) => {
    history.pushState(null, '', '/project/' + slug);
    setCurrentProject(slug);
    setCurrentPage('project-' + slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBackToProjects = () => {
    history.pushState(null, '', '/work');
    setCurrentProject(null);
    setCurrentPage('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <Nav currentPage={currentPage} onNav={navigate} />
      <main className="fade-in" key={currentPage}>
        {currentPage === 'home'     && <Home onNav={navigate} onProject={showProject} />}
        {currentPage === 'about'    && <About />}
        {currentPage === 'projects' && <Projects onProject={showProject} />}
        {currentProject             && <ProjectDetail slug={currentProject} onBack={goBackToProjects} />}
      </main>
    </div>
  );
}
