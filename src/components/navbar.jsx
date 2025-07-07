// File: src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import Home from '../pages/index';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`} id="navbar-container">
      {/* Top Navigation Strip */}
      <div className="top-navbar">
        <div className="top-nav-content">
          {/* <a href="#support" className="top-nav-link">Support</a>
          <a href="#blog" className="top-nav-link">Blog</a>
          <a href="#careers" className="top-nav-link">Careers</a>
          <a href="#login" className="top-nav-link">Login</a> */}


          <ul><Link to="/" className="top-nav-link">Support</Link></ul>
          <ul><Link to="Podcasts" className="top-nav-link">Podcasts</Link></ul>
          <ul><Link to="Services" className="top-nav-link">Page</Link></ul>
          <ul><Link to="Page4" className="top-nav-link">Page</Link></ul>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-navbar" id="navbar">
        <div className="nav-container">
          <Link to="#" className="logo">Total Health Logo</Link>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} id="nav-menu">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="About" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="Services" className="nav-link">Services</Link></li>
            <li className="nav-item"><Link to="Page4" className="nav-link">Portfolio</Link></li>
            <li className="nav-item"><Link to="Contact" className="nav-link">Contact</Link></li>
            <li className="nav-item"><Link to="Appointments" className="nav-link cta">Appointments</Link></li>
          </ul>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`} id="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </div>
  );
}