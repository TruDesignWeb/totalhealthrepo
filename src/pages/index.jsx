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




export default function Home() {
    useRevealOnScroll();
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Banner />
      <div className="content-wrapper">
        <Features />
        <Stats />
        {/* <Programs /> */}
        <Membership />
        <Outcomes />
        <Journey />
        <InfiniteScroll
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
        />      






    {/* <div style={{ height: '600px', position: 'relative' }}>
    <FluidGlass 
        mode="lens" // or "bar", "cube"
        lensProps={{
        scale: 0.25,
        ior: 1.15,
        thickness: 5,
        chromaticAberration: 0.1,
        anisotropy: 0.01  
        }}
        backgroundColor = '#000'
        // barProps={} // add specific props if using bar mode
        // cubeProps={} // add specific props if using cube mode
    />
    </div>
         */}
        
      </div>

      <Footer />
    </>
  );
}
