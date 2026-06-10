import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, AtSign } from 'lucide-react';

export default function Nav({ currentPage, onNav }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isProjectDetail = !['home', 'projects', 'about'].includes(currentPage);

  useEffect(() => { setMenuOpen(false); }, [currentPage]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { id: 'home',     label: 'Home' },
    { id: 'projects', label: 'Work' },
    { id: 'about',    label: 'About' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-8 md:px-15 h-17 bg-warm-white/92 backdrop-blur-md border-b border-rule">
        <a
          className="font-serif text-[19px] tracking-[0.06em] text-ink cursor-pointer no-underline hover:text-terracotta transition-colors duration-200"
          onClick={() => onNav('home')}
        >
          <span className="md:hidden">Rahi</span>
          <span className="hidden md:inline">Rahi Pinjani</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex gap-10 items-center">
          {links.map(({ id, label }) => {
            const isActive = currentPage === id || (id === 'projects' && isProjectDetail);
            return (
              <a
                key={id}
                onClick={() => onNav(id)}
                className={`text-[11px] tracking-[0.18em] uppercase no-underline cursor-pointer pb-0.5 border-b transition-colors duration-200 ${
                  isActive
                    ? 'text-ink border-terracotta'
                    : 'text-muted border-transparent hover:text-ink hover:border-terracotta'
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-ink hover:text-terracotta transition-colors duration-200 cursor-pointer p-1"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile / tablet menu overlay */}
      <div className={`fixed inset-0 top-17 z-90 bg-warm-white flex flex-col lg:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Nav links */}
        <div className="flex-1 flex flex-col justify-center px-10 gap-1">
          {links.map(({ id, label }) => {
            const isActive = currentPage === id || (id === 'projects' && isProjectDetail);
            return (
              <a
                key={id}
                onClick={() => { onNav(id); setMenuOpen(false); }}
                className={`font-serif text-[52px] italic font-light leading-tight cursor-pointer no-underline border-b border-rule py-5 transition-colors duration-200 ${
                  isActive ? 'text-terracotta' : 'text-ink hover:text-terracotta'
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Contact strip */}
        <div className="px-10 pb-12 pt-8 border-t border-rule">
          <p className="text-[9px] tracking-[0.26em] uppercase text-muted mb-6">Get in touch</p>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:rahipinjani1@gmail.com"
              className="flex items-center gap-3 text-sm text-ink hover:text-terracotta transition-colors duration-200 no-underline"
            >
              <Mail size={15} strokeWidth={1.5} className="text-terracotta shrink-0" />
              rahipinjani1@gmail.com
            </a>
            <a
              href="tel:+918799811448"
              className="flex items-center gap-3 text-sm text-ink hover:text-terracotta transition-colors duration-200 no-underline"
            >
              <Phone size={15} strokeWidth={1.5} className="text-terracotta shrink-0" />
              +91 87998 11448
            </a>
            <a
              href="https://www.instagram.com/simplyrahi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-ink hover:text-terracotta transition-colors duration-200 no-underline"
            >
              <AtSign size={15} strokeWidth={1.5} className="text-terracotta shrink-0" />
              @simplyrahi
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
