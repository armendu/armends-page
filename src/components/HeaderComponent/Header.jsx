import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = () => (
  <header>
    <div className="menu-box">
      <FontAwesomeIcon icon={faHome} size='1x' /> <span className="menu">Home</span>
    </div>
  </header>
);

export default Header;