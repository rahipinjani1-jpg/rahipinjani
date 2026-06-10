import { useState, useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';

function parseHash() {
  const hash = window.location.hash.slice(1);
  if (!hash || hash === 'home') return { page: 'home', project: null };
  if (hash === 'about') return { page: 'about', project: null };
  if (hash === 'projects') return { page: 'projects', project: null };
  if (hash.startsWith('project/')) {
    const slug = hash.slice(8);
    return { page: 'project-' + slug, project: slug };
  }
  return { page: 'home', project: null };
}

export default function App() {
  const { page: initPage, project: initProject } = parseHash();
  const [currentPage, setCurrentPage] = useState(initPage);
  const [currentProject, setCurrentProject] = useState(initProject);

  useEffect(() => {
    const onPopState = () => {
      const { page, project } = parseHash();
      setCurrentPage(page);
      setCurrentProject(project);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (page) => {
    history.pushState(null, '', '#' + page);
    setCurrentPage(page);
    setCurrentProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showProject = (slug) => {
    history.pushState(null, '', '#project/' + slug);
    setCurrentProject(slug);
    setCurrentPage('project-' + slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBackToProjects = () => {
    history.pushState(null, '', '#projects');
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
