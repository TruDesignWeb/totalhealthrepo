// File: src/components/Features.jsx
import React from 'react';
import '../styles/features.css';
import TiltedCard from './tiltedcard';
import MagneticButton from './magneticbutton';

export default function Features({
  title = 'Revolutionary Healthcare',
  cards = [],
  variant = '',
}) {
  return (
    <section className={`features ${variant}`}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="features-grid">
          {cards.map((card, idx) => (
            <TiltedCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}




// File: src/components/Features.jsx
// import React from 'react';
// import '../styles/features.css';
// import TiltedCard from './tiltedcard';
// import MagneticButton from './magneticbutton';

// export default function Features() {
//   return (
//     <section className="features">
//       <div className="container">
//         <h2 className="section-title">Revolutionary Healthcare</h2>
//         <div className="features-grid">
          
//           <TiltedCard
//             imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
//             altText="Kendrick Lamar - GNX Album Cover"
//             captionText="Kendrick Lamar - GNX"
//             containerHeight="250px"
//             containerWidth="300px"
//             imageHeight="250px"
//             imageWidth="300px"
//             rotateAmplitude={12}
//             scaleOnHover={1.1}
//             showMobileWarning={false}
//             showTooltip={true}
//             displayOverlayContent={true}
//             overlayContent={
//                 <p className="tilted-card-demo-text">
//                 Kendrick Lamar - GNX
//                 </p>
//             }
//             backgroundColor='rgba(0,0,0,0)'
//             />
//             <TiltedCard
//             imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
//             altText="Kendrick Lamar - GNX Album Cover"
//             captionText="Kendrick Lamar - GNX"
//             containerHeight="250px"
//             containerWidth="300px"
//             imageHeight="250px"
//             imageWidth="300px"
//             rotateAmplitude={12}
//             scaleOnHover={1.1}
//             showMobileWarning={false}
//             showTooltip={true}
//             displayOverlayContent={true}
//             overlayContent={
//                 <p className="tilted-card-demo-text">
//                 Kendrick Lamar - GNX
//                 </p>
//             }
//             backgroundColor='rgba(0,0,0,0)'
//             />
//             <TiltedCard
//             imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
//             altText="Kendrick Lamar - GNX Album Cover"
//             captionText="Kendrick Lamar - GNX"
//             containerHeight="250px"
//             containerWidth="300px"
//             imageHeight="250px"
//             imageWidth="300px"
//             rotateAmplitude={12}
//             scaleOnHover={1.1}
//             showMobileWarning={false}
//             showTooltip={true}
//             displayOverlayContent={true}
//             overlayContent={
//                 <p className="tilted-card-demo-text">
//                 Kendrick Lamar - GNX
//                 </p>
//             }
//             backgroundColor='rgba(0,0,0,0)'
//             />

{/*             
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="250px"
            containerWidth="300px"
            imageHeight="250px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
                <p className="tilted-card-demo-text">
                Kendrick Lamar - GNX
                </p>
            }
            backgroundColor='rgba(0,0,0,0)'
            />
            <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="250px"
            containerWidth="300px"
            imageHeight="250px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
                <p className="tilted-card-demo-text">
                Kendrick Lamar - GNX
                </p>
            }
            backgroundColor='rgba(0,0,0,0)'
            />
            <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="250px"
            containerWidth="300px"
            imageHeight="250px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
                <p className="tilted-card-demo-text">
                Kendrick Lamar - GNX
                </p>
            }
            backgroundColor='rgba(0,0,0,0)'
            /> 

            
        </div>
      </div>
    </section>
  );
}

/*}

{/* <div className="feature-card">
            <span className="feature-icon">🧬</span>
            <h3>Precision Medicine</h3>
            <p>Personalized treatment plans based on your unique genetic profile, lifestyle, and health history for optimal outcomes.</p>
          </div> 
          <div className="feature-card">
            <span className="feature-icon">🤖</span>
            <h3>AI Health Assistant</h3>
            <p>24/7 intelligent health monitoring and guidance powered by advanced artificial intelligence and machine learning.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💊</span>
            <h3>Preventive Care</h3>
            <p>Proactive health strategies and early detection systems to prevent illness before it starts.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🧘</span>
            <h3>Mental Wellness</h3>
            <p>Comprehensive mental health support including therapy, mindfulness, and stress management programs.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📱</span>
            <h3>Digital Health Hub</h3>
            <p>Seamless integration across all your devices for complete health tracking and telemedicine consultations.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🏃</span>
            <h3>Lifestyle Coaching</h3>
            <p>Expert guidance on nutrition, fitness, sleep, and wellness habits for sustainable health improvements.</p>
          </div>
          */}