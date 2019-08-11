import React from 'react';

const Menu = () => (
  <div
    className="menu"
    style={{
      position: 'fixed',
      top: 0,
      zIndex: 100,
    }}
  >
    <ul class="actions">
      <li>
        <button onClick={''}>About me</button>
        <button onClick={''}>Projects</button>
        <button onClick={() => this.handleChangeColors()}>
          Change background colors
          </button>
      </li>
    </ul>
  </div>
);

export default Menu;