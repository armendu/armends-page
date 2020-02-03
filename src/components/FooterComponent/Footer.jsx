import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul>
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa fa-rss"></i></a></li>
            <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
          </ul>
          <p>Copyright &copy; { new Date().getFullYear() } Armend Ukëhaxhaj </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;