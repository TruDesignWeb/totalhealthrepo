// File: src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Features from '../components/features';
import Stats from '../components/stats';
import Programs from '../components/programs';
import Membership from '../components/membership';
import Outcomes from '../components/outcomes';
import Journey from '../components/journey';
import Footer from '../components/footer';
import CustomCursor from '../components/customcursor';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import '../styles/animations.css';
import InfiniteScroll from '../components/infinitescroll';
import TiltedCard from '../components/tiltedcard';
import FluidGlass from '../components/fluidglass';
import Register from '../components/register';
import Login from '../components/login';


const featureCards = [
    {
      imageSrc: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
      altText: 'Kendrick Lamar - GNX Album Cover',
      captionText: 'Kendrick Lamar - GNX',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>,
      backgroundColor: 'rgba(0,0,0,0)',
    },{
      imageSrc: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
      altText: 'Kendrick Lamar - GNX Album Cover',
      captionText: 'Kendrick Lamar - GNX',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>,
      backgroundColor: 'rgba(0,0,0,0)',
      },
    {
      imageSrc: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
      altText: 'Kendrick Lamar - GNX Album Cover',
      captionText: 'Kendrick Lamar - GNX',
      containerHeight: '350px',
      containerWidth: '300px',
      imageHeight: '350px',
      imageWidth: '300px',
      rotateAmplitude: 12,
      scaleOnHover: 1.1,
      showMobileWarning: false,
      showTooltip: true,
      displayOverlayContent: true,
      overlayContent: <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>,
      backgroundColor: 'rgba(0,0,0,0)',
      }];

export default function Home() {
    useRevealOnScroll();
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Banner />
      <div className="content-wrapper">
        
        <Features
          title="Customized Feature Section"
          cards={featureCards}
          variant="" // Optional: for different styles
        />
        
        

        <Stats
          title="Our Impact"
          stats={[
            { target: 120, label: 'Brothers killed' },
            { target: 99, label: '% Recovery Rate' },
            { target: 3000, label: 'Patients Helped' },
            { target: 20, label: 'Years in Operation' }
          ]}
          variant="dark-theme"
        />
        
        

        <Outcomes
          variant = "about"
          label="FEATURED BENEFITS"
          title="What You’ll Gain"
          introText="Our holistic approach promotes wellness from within, leading to lasting benefits such as:"
          outcomes={[
            {
              icon: '💪',
              title: 'Stronger Immunity',
              description: 'Fortified defenses against illness and faster recovery times.',
            },
            {
              icon: '🧘',
              title: 'Mental Clarity',
              description: 'Reduced stress and improved focus and decision-making.',
            },
            {
              icon: '🍽️',
              title: 'Better Digestion',
              description: 'Healthier gut and improved nutrient absorption.',
            },
          ]}
        />

        <Journey
            title="Start Your Path to Wellness"
            subtitle="Personalized healthcare solutions designed to help you thrive."
            ctaText="Get Started Today"
            variant="light-theme"
            features={[
              {
                title: 'Advanced Testing',
                description: 'Gain insights through our comprehensive diagnostics.',
                className: 'advanced-testing',
              },
              {
                title: 'Tailored Programs',
                description: 'Receive custom plans based on your unique biology.',
                className: 'tailored-programs',
              },
              {
                title: 'Cutting-Edge Therapies',
                description: 'Access the latest regenerative medicine solutions.',
                className: 'cutting-edge-therapies',
              },
            ]}
        />

        <Membership />

        <Register />
        <Login />


        {/* <InfiniteScroll
          items={[
          { content: "Truman" },
          { content: <p>Vasi</p> },
          { content: "Vasi" },
          { content: <p>Truman</p> }
          ]}
          isTilted={true}
          tiltDirection='right'
          autoplay={true}
          autoplaySpeed={0.2}
          autoplayDirection="down"
          pauseOnHover={true}
        />       */}
        
      </div>

      <Footer />
    </>
  );
}
