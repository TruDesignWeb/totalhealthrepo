
// File: src/components/Journey.jsx
import React from 'react';
import '../styles/journey.css';

export default function Journey({
  title = 'Your journey starts here',
  subtitle = 'Unlock personalized insights and advanced solutions to optimize your health and extend your lifespan.',
  ctaText = 'Extend Your Lifespan',
  features = [],
  variant = '',
}) {
  return (
    <section className={`journey-section ${variant}`}>
      <div className="journey-container">
        <div className="journey-hero-section">
          <h1 className="journey-hero-title">{title}</h1>
          <p className="journey-hero-subtitle">{subtitle}</p>
          <button className="journey-cta-button">{ctaText}</button>
        </div>

        {features.map(({ title, description, className }, idx) => (
          <div
            key={idx}
            className={`journey-feature-card ${className ?? ''}`.trim()}
          >
            <h2 className="journey-feature-title">{title}</h2>
            <p className="journey-feature-description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}




// // File: src/components/Journey.jsx
// import React from 'react';
// import '../styles/journey.css';

// export default function Journey() {
//   return (
//     <section className="journey-section">
//       <div className="journey-container">
//         <div className="journey-hero-section">
//           <h1 className="journey-hero-title">Your journey starts here</h1>
//           <p className="journey-hero-subtitle">Unlock personalized insights and advanced solutions to optimize your health and extend your lifespan.</p>
//           <button className="journey-cta-button">Extend Your Lifespan</button>
//         </div>

//         <div className="journey-feature-card precision-diagnostics">
//           <h2 className="journey-feature-title">Precision Diagnostics</h2>
//           <p className="journey-feature-description">Identify the risk of life-threatening diseases early with our advanced multi-modal diagnostics.</p>
//         </div>

//         <div className="journey-feature-card performance-optimization">
//           <h2 className="journey-feature-title">Performance Optimization</h2>
//           <p className="journey-feature-description">Learn what your body needs to maximize healthful longevity.</p>
//         </div>

//         <div className="journey-feature-card regenerative-medicine">
//           <h2 className="journey-feature-title">Regenerative Medicine</h2>
//           <p className="journey-feature-description">Restore your physical peak with breakthrough therapeutics.</p>
//         </div>
//       </div>
//     </section>
//   );
// }
