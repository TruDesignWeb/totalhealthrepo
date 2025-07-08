// File: src/components/Stats.jsx
import React, { useEffect, useRef, useState } from 'react';
import '../styles/stats.css';

function StatItem({ target, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let current = 0;
        const increment = target / 200;

        const updateCounter = () => {
          current += increment;
          if (current < target) {
            setCount(Math.ceil(current));
            requestAnimationFrame(updateCounter);
          } else {
            setCount(target);
          }
        };

        updateCounter();
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number">{count}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Stats({
  title = 'Transforming Lives',
  stats = [
    { target: 98, label: '% Patient Satisfaction' },
    { target: 1500, label: 'Patients Treated' },
    { target: 1500, label: 'Patients Treated' },
    { target: 15, label: 'Years of Excellence' },
  ],
  variant = ''
}) {
  return (
    <section className={`stats ${variant}`}>
      <div className="container">
        <h2 className="section-title" style={{ color: 'white' }}>{title}</h2>
        <div className="stats-grid">
          {stats.map(({ target, label }, index) => (
            <StatItem key={index} target={target} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}





// File: src/components/Stats.jsx
// import React, { useEffect, useRef, useState } from 'react';
// import '../styles/stats.css';

// function StatItem({ target, label }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         let current = 0;
//         const increment = target / 200;

//         const updateCounter = () => {
//           current += increment;
//           if (current < target) {
//             setCount(Math.ceil(current));
//             requestAnimationFrame(updateCounter);
//           } else {
//             setCount(target);
//           }
//         };

//         updateCounter();
//         observer.disconnect();
//       }
//     }, { threshold: 0.5 });

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => observer.disconnect();
//   }, [target]);

//   return (
//     <div className="stat-item" ref={ref}>
//       <span className="stat-number">{count}</span>
//       <span className="stat-label">{label}</span>
//     </div>
//   );
// }

// export default function Stats() {
//   return (
//     <section className="stats">
//       <div className="container">
//         <h2 className="section-title" style={{ color: 'white' }}>Transforming Lives</h2>
//         <div className="stats-grid">
//           <StatItem target={98} label="% Patient Satisfaction" />
//           <StatItem target={1500} label="Patients Treated" />
//           <StatItem target={1500} label="Patients Treated" />
//           <StatItem target={15} label="Years of Excellence" />
//         </div>
//       </div>
//     </section>
//   );
// }
