
// File: src/components/Journey.jsx
import React from 'react';
import '../styles/journey.css';

export default function Journey() {
  return (
    <section className="journey-section">
      <div className="journey-container">
        <div className="journey-hero-section">
          <h1 className="journey-hero-title">Your journey starts here</h1>
          <p className="journey-hero-subtitle">Unlock personalized insights and advanced solutions to optimize your health and extend your lifespan.</p>
          <button className="journey-cta-button">Extend Your Lifespan</button>
        </div>

        <div className="journey-feature-card precision-diagnostics">
          <h2 className="journey-feature-title">Precision Diagnostics</h2>
          <p className="journey-feature-description">Identify the risk of life-threatening diseases early with our advanced multi-modal diagnostics.</p>
        </div>

        <div className="journey-feature-card performance-optimization">
          <h2 className="journey-feature-title">Performance Optimization</h2>
          <p className="journey-feature-description">Learn what your body needs to maximize healthful longevity.</p>
        </div>

        <div className="journey-feature-card regenerative-medicine">
          <h2 className="journey-feature-title">Regenerative Medicine</h2>
          <p className="journey-feature-description">Restore your physical peak with breakthrough therapeutics.</p>
        </div>
      </div>
    </section>
  );
}
