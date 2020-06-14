import React from 'react';
import CSharpLogo from '../../resources/images/c-sharp-logo.png';

import './Projects.css';

const Projects = () => (
  <div class="main-content">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <div class="left-text col-md-8">
            <h4><em>Tarscord</em><br /> Project</h4>
            <p>Placeholder.</p>
          </div>
          <div class="right-image col-md-4">
            <img src={CSharpLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default Projects;