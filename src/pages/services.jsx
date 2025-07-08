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


export default function About(){
    useRevealOnScroll()
    return(
        <>
        <CustomCursor />
        
        <Navbar />
        <Banner2 
            image = "/assets/images/milky-way-full-stars-space.jpg"
            title = "Your Wellness starts here"
            subtitle= "Discover a new path to living with the fountain of youth"
        />
        


        <Journey />
        <Outcomes />

        <Footer />


        </>
    );
}