import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const NAV_SECTIONS = ['experience', 'skills', 'education', 'contact'] as const;

const Header: React.FC<HeaderProps> = ({ isDark, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#hero" className="header-name" onClick={closeMenu}>
          Armend Ukehaxhaj
        </a>

        <div className="header-right">
          <nav className={`header-nav${menuOpen ? ' header-nav--open' : ''}`}>
            {NAV_SECTIONS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={closeMenu}
                className={activeSection === id ? 'header-nav-active' : ''}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>

          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
          </button>

          <button
            className={`header-burger${menuOpen ? ' header-burger--open' : ''}`}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
