
// File: src/components/Outcomes.jsx
import React from 'react';
import '../styles/outcomes.css';
import '../styles/aboutoutcomes.css';


export default function Outcomes({
  label = 'PROGRAMS',
  title = 'Anticipated Outcomes',
  introText = 'We expect our clients to drastically reduce their rate of aging which could lead to a reduced risk for all major diseases such as cardiovascular disease, Alzheimer\'s disease, cancer, metabolic syndrome, and frailty. Additional benefits include:',
  outcomes = [
    {
      icon: '⚡',
      title: 'Boost in physical and mental performance',
      description: 'Enhanced strength, endurance, and mental clarity for daily tasks and activities.',
    },
    {
      icon: '📈',
      title: 'Improved body composition',
      description: 'Increased muscle mass and reduced body fat for a healthier physique',
    },
    {
      icon: '🌙',
      title: 'Improved sleep quality',
      description: 'Deeper, more restful sleep, leading to better recovery and daily function.',
    },
    {
      icon: '📊',
      title: 'An overall boost in energy',
      description: 'Higher energy levels throughout the day, reducing fatigue and increasing productivity.',
    },
    {
      icon: '🏃',
      title: 'Mobility',
      description: 'Greater flexibility and ease of movement, reducing pain and risk of injury.',
    },
    {
      icon: '✨',
      title: 'Lower biological age',
      description: 'Slower aging process at the cellular level, contributing to a longer and healthier lifespan.',
    },
    {
      icon: '🧠',
      title: 'Improved cognition and overall brain health',
      description: 'Sharper memory, quicker thinking, and better decision-making abilities.',
    },
    {
      icon: '❤️',
      title: 'Improved sexual health',
      description: 'Enhanced libido and better sexual performance.',
    },
  ],
  variant = '',
}) {
  return (
    <section className={`outcomes-section ${variant}`}>
      <div className="outcomes-container">
        <div className="outcomes-label">{label}</div>

        <div className="outcomes-content-wrapper">
          <div className="outcomes-title-section">
            <h1>{title}</h1>
          </div>

          <div className="outcomes-intro-text">{introText}</div>
        </div>

        <div className="outcomes-grid">
          {outcomes.map((item, idx) => (
            <div className="outcome-item" key={idx}>
              <div className="outcome-icon">{item.icon}</div>
              <div className="outcome-title">{item.title}</div>
              <div className="outcome-description">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// export default function Outcomes() {
//   return (
//     <section className="outcomes-section">
//       <div className="outcomes-container">
//         <div className="outcomes-label">PROGRAMS</div>

//         <div className="outcomes-content-wrapper">
//           <div className="outcomes-title-section">
//             <h1>Anticipated Outcomes</h1>
//           </div>

//           <div className="outcomes-intro-text">
//             We expect our clients to drastically reduce their rate of aging which could lead to a reduced risk for all major diseases such as cardiovascular disease, Alzheimer's disease, cancer, metabolic syndrome, and frailty. Additional benefits include:
//           </div>
//         </div>

//         <div className="outcomes-grid">
//           <div className="outcome-item">
//             <div className="outcome-icon">⚡</div>
//             <div className="outcome-title">Boost in physical and mental performance</div>
//             <div className="outcome-description">Enhanced strength, endurance, and mental clarity for daily tasks and activities.</div>
//           </div>

//           <div className="outcome-item">
//             <div className="outcome-icon">📈</div>
//             <div className="outcome-title">Improved body composition</div>
//             <div className="outcome-description">Increased muscle mass and reduced body fat for a healthier physique</div>
//           </div>

//           <div className="outcome-item">
//             <div className="outcome-icon">🌙</div>
//             <div className="outcome-title">Improved sleep quality</div>
//             <div className="outcome-description">Deeper, more restful sleep, leading to better recovery and daily function.</div>
//           </div>

//           <div className="outcome-item">
//             <div className="outcome-icon">📊</div>
//             <div className="outcome-title">An overall boost in energy</div>
//             <div className="outcome-description">Higher energy levels throughout the day, reducing fatigue and increasing productivity.</div>
//           </div>

//           <div className="outcome-item">
//             <div className="outcome-icon">🏃</div>
//             <div className="outcome-title">Mobility</div>
//             <div className="outcome-description">Greater flexibility and ease of movement, reducing pain and risk of injury.</div>
//           </div>

//           <div className="outcome-item">
//             <div className="outcome-icon">✨</div>
//             <div className="outcome-title">Lower biological age</div>
//             <div className="outcome-description">Slower aging process at the cellular level, contributing to a longer and healthier lifespan.</div>
//           </div>

//           <div className="outcome-item">
//             <div className="outcome-icon">🧠</div>
//             <div className="outcome-title">Improved cognition and overall brain health</div>
//             <div className="outcome-description">Sharper memory, quicker thinking, and better decision-making abilities.</div>
//           </div>

//           <div className="outcome-item">
//             <div className="outcome-icon">❤️</div>
//             <div className="outcome-title">Improved sexual health</div>
//             <div className="outcome-description">Enhanced libido and better sexual performance.</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// File: src/components/Outcomes.jsx
