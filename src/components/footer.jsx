
// File: src/components/Footer.jsx
import React from 'react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className = "footer">
      <div className="footer-content">
        <div className="footer-section-1">
          <h3>Medical Center Location</h3>
          <p>7601 Medical Plaza<br />Suite 110<br />West Des Moines, IA 50266</p>
          <p>Phone: (515) 555-CARE<br />Email: care@totalhealthexp.com</p>
        </div>
        <div className="footer-section">
          <h3 data-icon="⚕️">Medical Services</h3>
          <p><a href="#">Emergency Medicine</a></p>
          <p><a href="#">Advanced Diagnostics</a></p>
          <p><a href="#">Cardiology Center</a></p>
          <p><a href="#">Neurology Services</a></p>
        </div>
        <div className="footer-section">
          <h3 data-icon="🔬">Research & Innovation</h3>
          <p>Leading medical research and clinical trials advancing healthcare technology and treatment methodologies.</p>
          <p><a href="#">Clinical Research</a></p>
          <p><a href="#">Medical Innovation</a></p>
        </div>
        <div className="footer-section">
          <h3 data-icon="🔬">Follow us</h3>
          <p>Leading medical research and clinical trials advancing healthcare technology and treatment methodologies.</p>
          <p><a href="#">Clinical Research</a></p>
          <p><a href="#">Medical Innovation</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Total Health Experience. Dedicated to exceptional medical care and patient wellness.</p>
      </div>
    </footer>
  );
}
