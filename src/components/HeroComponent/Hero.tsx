import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">
        <p className="hero-greeting">Hello, I&apos;m</p>
        <h1 className="hero-name">Armend Ukehaxhaj</h1>
        <h2 className="hero-title">Senior Software Engineer</h2>
        <p className="hero-bio">
          Senior Software Engineer with 9+ years of experience building scalable backend
          systems using C# and .NET. Experienced in microservices and distributed systems
          (Orleans), with a focus on system design, performance, and production reliability
          in fintech and sportsbook domains.
        </p>
        <div className="hero-links">
          <a href="https://github.com/armendu" className="hero-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
            <span>github.com/armendu</span>
          </a>
          <a href="https://linkedin.com/in/armend-ukehaxhaj" className="hero-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
            <span>linkedin.com/in/armend-ukehaxhaj</span>
          </a>
        </div>
        <a href="#experience" className="hero-cta">View my work</a>
      </div>
    </section>
  );
};

export default Hero;
