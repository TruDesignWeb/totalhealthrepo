// File: src/components/Navbar.jsx
import React, { useEffect, useState, useRef } from 'react';
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

          <ul><Link to="/Membership" className="top-nav-link">Membership</Link></ul>
          <ul><Link to="/Podcasts" className="top-nav-link">Podcasts</Link></ul>
          <ul><Link to="/Contact" className="top-nav-link">Contact</Link></ul>
          <ul><Link to="Page4" className="top-nav-link">Page</Link></ul>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-navbar" id="navbar">
        <div className="nav-container">
          <Link to="/" className="logo"><img src="/assets/images/TotalHealthLogo_HorizontalWhite.png" alt="Total Health Logo" className = "logo-img" /></Link>
          
          <div className={`hamburger ${menuOpen ? 'active' : ''}`} id="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} id="nav-menu">
            <li className="nav-item"><Link to="/About" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="/Services" className="nav-link">Services</Link></li>
            <li className="nav-item"><Link to="/Partners" className="nav-link">Partners</Link></li>
            <li className="nav-item"><Link to="/Patients" className="nav-link">Patients</Link></li>
            <li className="nav-item"><Link to="/Appointments" className="nav-link cta">Appointments</Link></li>
          </ul>
          
        </div>
      </nav>
    </div>
  );
}