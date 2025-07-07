
// File: src/components/Programs.jsx
// import React from 'react';
// import '../styles/programs.css';

// export default function Programs() {
//   return (
//     <section className="programs-section">
//       <div className="programs-section-header">
//         <h2 className="section-title">Longevity Programs</h2>
//         <p className="programs-section-subtitle">
//           We offer comprehensive programs, each focusing on different body systems to optimize your health and extend your lifespan.
//         </p>
//       </div>
//       <div className="programs-container">
//         <div className="program-card">
//           <h3 className="program-title">
//             <span className="program-number">01</span> Longevity 360
//           </h3>
//           <p className="program-description">
//             Comprehensive assessments and personalized interventions aimed at enhancing overall lifespan and healthspan.
//           </p>
//           <div className="program-features">
//             <span className="feature-tag">Advanced Diagnostics</span>
//             <span className="feature-tag">Personalized Plan</span>
//             <span className="feature-tag">Cutting-edge Therapies</span>
//           </div>
//         </div>
//         <div className="program-card">
//           <h3 className="program-title">
//             <span className="program-number">02</span> Weight Loss
//           </h3>
//           <p className="program-description">
//             Holistic approach to achieving and maintaining a healthy weight.
//           </p>
//           <div className="program-features">
//             <span className="feature-tag">Metabolic Analysis</span>
//             <span className="feature-tag">Custom Nutrition</span>
//             <span className="feature-tag">Behavioral Support</span>
//           </div>
//         </div>
//         <div className="program-card">
//           <h3 className="program-title">
//             <span className="program-number">03</span> Hormone Balance
//           </h3>
//           <p className="program-description">
//             Addresses hormonal imbalances that can affect your overall health and well-being.
//           </p>
//           <div className="program-features">
//             <span className="feature-tag">Hormonal Assessment</span>
//             <span className="feature-tag">Bioidentical HRT</span>
//             <span className="feature-tag">Lifestyle Changes</span>
//           </div>
//         </div>
//         <div className="program-card">
//           <h3 className="program-title">
//             <span className="program-number">04</span> Regenerative Medicine
//           </h3>
//           <p className="program-description">
//             Leverages advanced therapies to promote healing and regeneration of damaged tissues.
//           </p>
//           <div className="program-features">
//             <span className="feature-tag">Stem Cell Therapy</span>
//             <span className="feature-tag">PRP Treatment</span>
//             <span className="feature-tag">Tissue Regeneration</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// File: src/components/Programs.jsx
import React from 'react';
import '../styles/programs.css';

const programs = [
  {
    title: 'Longevity 360',
    number: '01',
    description: 'Comprehensive assessments and personalized interventions aimed at enhancing overall lifespan and healthspan.',
    features: ['Advanced Diagnostics', 'Personalized Plan', 'Cutting-edge Therapies']
  },
  {
    title: 'Weight Loss',
    number: '02',
    description: 'Holistic approach to achieving and maintaining a healthy weight.',
    features: ['Metabolic Analysis', 'Custom Nutrition', 'Behavioral Support']
  },
  {
    title: 'Hormone Balance',
    number: '03',
    description: 'Addresses hormonal imbalances with personalized treatment including bioidentical hormone replacement therapy.',
    features: ['Hormonal Assessment', 'Bioidentical HRT', 'Lifestyle Changes']
  },
  {
    title: 'Regenerative Medicine',
    number: '04',
    description: 'Advanced therapies like stem cell therapy and PRP for tissue regeneration.',
    features: ['Stem Cell Therapy', 'PRP Treatment', 'Tissue Regeneration']
  }
];

export default function Programs() {
  return (
    <section className="programs-section">
      <div className="programs-section-header">
        <h2 className="section-title">Longevity Programs</h2>
        <p className="programs-section-subtitle">
          We offer comprehensive programs, each focusing on different body systems to optimize your health and extend your lifespan.
        </p>
      </div>
      <div className="programs-stack">
        {programs.map((program, idx) => (
          <div key={idx} className="program-wrapper">
            <div className="program-card">
              <h3 className="program-title">
                <span className="program-number">{program.number}</span>
                {program.title}
              </h3>
              <p className="program-description">{program.description}</p>
              <div className="program-features">
                {program.features.map((feature, i) => (
                  <span key={i} className="feature-tag">{feature}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}