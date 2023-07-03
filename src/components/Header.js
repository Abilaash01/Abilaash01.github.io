import React from 'react';
import logo from '../images/logo.jpg'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo-container">
          <a href='/'><img className="logo" src={logo} alt='img'/></a>
          <h1 className="company-name">FitLife</h1>
        </div>
        <ul className="nav-items">
          <li><a href="/">Home</a></li>
          <li><a href="./Memberships">Memberships</a></li>
          <li><a href="/Planner">Workout Planner</a></li>
          <li><a href="/Finder">Find A Gym</a></li>
          <li><a href="/Contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
