import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Dashboard from './pages/Dashboard';
import Login from './components/login';
import ProtectedRoute from './components/protectedroute';
import GuestRoute from './components/guestroute';
import Register from './components/register';
import { useState } from 'react';


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
        <Route path="/support" element={<About />} />
        <Route path="/podcasts" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />

        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        
        <Route path="/page4" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointments" element={<About />} />



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