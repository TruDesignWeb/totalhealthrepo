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
import Banner2 from '../components/banner2';
import './about.css';

import { useEffect, useRef, useState } from "react";


export default function About({

     eyebrow = "Philosophy",
  title = "Look and feel your best naturally",
  copy = `We want to help you with your health and wellness at Total Health Initiative, I really like being healthy do you?`,
  image = "/assets/images/milky-way-full-stars-space.jpg",
}) {
    useRevealOnScroll()
  const imgRef = useRef(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!imgRef.current) return;

        const rect = imgRef.current.getBoundingClientRect();
        const viewportH = window.innerHeight || document.documentElement.clientHeight;

        // progress: 0 (top enters) → 1 (bottom leaves)
        const progress = Math.min(
          1,
          Math.max(0, (viewportH - rect.top) / (viewportH + rect.height))
        );

        // map progress to a small translate range (parallax amount)
        const translate = (progress - 0.5) * 40; // -20px … +20px
        setY(translate);
        ticking = false;
      });
    };

    // run once on mount
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, 
  []);


    return(
        <>
        <CustomCursor />
        
        <Navbar />
        <Banner2 
            image = "/assets/images/milky-way-full-stars-space.jpg"
            title = "About Us"
            subtitle= "Meet the team that makes your medical dreams possible"
        />
        
        <section className="philo-section" aria-labelledby="philo-title">
        <div className="philo-wrap">
            {/* Left: text */}
            <div className="philo-copy">
            <span className="philo-eyebrow">{eyebrow}</span>
            <h2 id="philo-title" className="philo-title">
                {title}
            </h2>
            <p className="philo-text">{copy}</p>
            </div>

            {/* Right: image stack with sage frame */}
            <div className="philo-media">
            <div className="sage-frame" aria-hidden="true" />
            <div
                className="image-card"
                ref={imgRef}
                style={{ transform: `translateY(${y}px)` }}
            >
                <img src={image} alt="Spa reception with serene, warm tones" />
            </div>
            </div>
        </div>
    </section>

        
        <Stats />

        <Footer />


        </>
    );
}