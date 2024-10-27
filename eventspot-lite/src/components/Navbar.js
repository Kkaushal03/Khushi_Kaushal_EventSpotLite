
import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleToggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setMenuActive(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">EventSpot Lite</div>

      
      <div className={`toggle-button ${menuActive ? 'active' : ''}`} onClick={handleToggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      
      <ul className={`navbar-links ${menuActive ? 'active' : ''}`}>
        <li onClick={() => handleScrollToSection('events-section')}>Explore Events</li>
        <li onClick={() => handleScrollToSection('contact-section')}>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
