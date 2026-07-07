import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo">
          <span className="dim">&lt;</span>Asmita<span className="accentc">/</span><span className="dim">&gt;</span>
        </div>
        <ul className={`navlinks ${isOpen ? 'open' : ''}`} id="navlinks">
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#clientwork" onClick={() => setIsOpen(false)}>Client Work</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li><a href="#contact" className="nav-cta-mobile" onClick={() => setIsOpen(false)}>Let's Talk</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Let's Work Together</a>
        <button 
          className="menu-btn" 
          aria-label="Toggle menu" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Navbar;