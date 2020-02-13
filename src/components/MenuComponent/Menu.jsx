import React from 'react';
import ButtonGroup from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';

const Menu = () => (
  <div
    className="menu"
    style={{
      position: 'fixed',
      top: 0,
      zIndex: 100,
    }}
  >
    <ButtonGroup size="large" color="secondary" aria-label="large outlined primary button group">
      <Button color="secondary">About me</Button>
      <Button color="secondary">Projects</Button>
      <Button color="secondary">Contact</Button>
    </ButtonGroup>
  </div>
);

export default Menu;