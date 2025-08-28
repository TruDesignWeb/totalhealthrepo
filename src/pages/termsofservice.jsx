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
import './terms.css';
import InfiniteScroll from '../components/infinitescroll';
import TiltedCard from '../components/tiltedcard';
import FluidGlass from '../components/fluidglass';
import Register from '../components/register';
import Login from '../components/login';
import Banner2 from '../components/banner2';


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
      <Banner2 
        image = "/assets/images/milky-way-full-stars-space.jpg"
        title = "Podcasts"
        subtitle= "Join our podcasts for our latest info"
    />


        <Features
          title="Podcast Section - Needs Link"
          cards={featureCards}
          variant="podcasts" // Optional: for different styles
        />

      

      <Footer />
    </>
  );
}
