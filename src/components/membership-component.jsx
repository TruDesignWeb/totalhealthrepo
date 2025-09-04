

// File: src/components/Membership.jsx
import React from 'react';
import '../styles/membership.css';

export default function Membership() {
  return (
    <div className="membership-container">
      <div className="membership-card">
        <h2 className="card-title">CORE</h2>
        <h3 className="card-subtitle">Don't die from something stupid</h3>
        <p className="card-description">Our advanced diagnostics program focused on early disease detection</p>
        <a href="/Membership" className="learn-more-btn">Learn More</a>
      </div>

      <div className="membership-card apex-card">
        <div className="recommended-badge">Recommended</div>
        <h2 className="card-title">APEX</h2>
        <h3 className="card-subtitle">Live without limits</h3>
        <p className="card-description">The world's leading longevity membership for those who refuse to settle</p>
        <a href="/Membership" className="learn-more-btn">Learn More</a>
      </div>

      <div className="membership-card epic-card">
        <h2 className="card-title">EPIC</h2>
        <h3 className="card-subtitle">Re-engineer your potential<br/>(Interview Only)</h3>
        <p className="card-description">Our personalized high performance membership.</p>
        <a href="/Membership" className="learn-more-btn">Request Interview</a>
      </div>
    </div>
  );
}
