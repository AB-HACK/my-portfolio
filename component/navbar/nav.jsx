import React from 'react';
import './nav.css'; // Import the CSS file for styling
import { FaHome, FaUser, FaBriefcase, FaImage, FaBars, FaEnvelope } from 'react-icons/fa'; // Using react-icons for Font Awesome icons

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#home" className="navbar-link active">
            <FaHome />
          </a>
        </li>
        <li className="navbar-item">
          <a href="#profile" className="navbar-link">
            <FaUser />
          </a>
        </li>
        <li className="navbar-item">
          <a href="#portfolio" className="navbar-link">
            <FaBriefcase />
          </a>
        </li>
        <li className="navbar-item">
          <a href="#gallery" className="navbar-link">
            <FaImage />
          </a>
        </li>
        <li className="navbar-item">
          <a href="#menu" className="navbar-link">
            <FaBars />
          </a>
        </li>
        <li className="navbar-item">
          <a href="#contact" className="navbar-link">
            <FaEnvelope />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;