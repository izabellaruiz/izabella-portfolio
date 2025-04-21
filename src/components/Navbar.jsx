import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#degree">Degree</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#bag">Bag 🎒</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
