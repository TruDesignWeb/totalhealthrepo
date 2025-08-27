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

import "./appointments.css";
import Banner2 from '../components/banner2';
import { useState, useEffect } from "react";
import axios from "axios";



export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to backend
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log("Server Response:", data);
  };

  return (
    <>
    <Navbar />
    <Banner2 
    title="Make an Appointment"
    />
    <CustomCursor />

    <section className="contact-page">
      <div className="contact-container">
        {/* Left Info Panel */}
        <div className="contact-info">
          <h2>See how Total Health can help!</h2>
          <p>7601 Office Plaza Dr. N Suite 115<br />West Des Moines, IA 50266</p>
          <p>(515) 555-CARE<br />info@totalhealth.com</p>
        </div>

        {/* Right Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>

    <Footer />
    </>
  );
}

// export default function About(){
//     useRevealOnScroll()
//     return(
//         <>
//         <CustomCursor />
        
//         <Navbar />
//         <Banner2 
//             image = "/assets/images/milky-way-full-stars-space.jpg"
//             title = "Your Wellness starts here"
//             subtitle= "Discover a new path to living with the fountain of youth"
//         />
        


//         <Journey />
//         <Outcomes />

//         <Footer />


//         </>
//     );
// }