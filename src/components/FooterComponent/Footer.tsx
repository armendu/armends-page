import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="site-footer">
      <div className="footer-inner">
        <p className="footer-tagline">Let&apos;s connect</p>
        <div className="footer-links">
          <a href="https://github.com/armendu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/armend-ukehaxhaj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <p className="footer-copy">&copy; {year} Armend Ukehaxhaj</p>
      </div>
    </footer>
  );
};

export default Footer;
