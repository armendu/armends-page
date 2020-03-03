import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul>
            <li><a href="https://github.com/armendu"><FontAwesomeIcon icon={faGithub} size='3x'/></a></li>
            <li><a href="https://www.linkedin.com/in/armend-ukehaxhaj/"><FontAwesomeIcon icon={faLinkedin} size='3x'/></a> </li>
          </ul>
          <p>Copyright &copy; {new Date().getFullYear()} Armend Ukëhaxhaj </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;