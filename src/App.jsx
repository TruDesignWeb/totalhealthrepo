import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';


import Dashboard from './pages/dashboard';
import Login from './components/login';
import ProtectedRoute from './components/protectedroute';
import GuestRoute from './components/guestroute';
import Register from './components/register';
import { useState } from 'react';
import Partners from './pages/collabpartners';
import Patients from './pages/patients';
import Membership from './pages/membership';
import Appointments from './pages/appointments';
import Podcasts from './pages/podcasts';


export default function App() {
   const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/membership" element={<Membership />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        <Route path="/partners" element={<Partners />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/appointments" element={<Appointments />} />







        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
        } />


        <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />
      <Route
        path="/register"
        element={
          <GuestRoute>
            <Register />
          </GuestRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
        
      </Routes>
      
    </>
  );
}