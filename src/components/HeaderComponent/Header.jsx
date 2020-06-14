import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = () => (
  <header>
    <div className="menu-box">
      <ul>
        <li><a href="default.asp"><FontAwesomeIcon icon={faHome} size='2x' /> <span className="menu"></span></a></li>
        <li><a href="news.asp"><FontAwesomeIcon icon={faUser} size='2x' /> <span className="menu"></span></a></li>
      </ul>
    </div>
  </header>
);

export default Header;