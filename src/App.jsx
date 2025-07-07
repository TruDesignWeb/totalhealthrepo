import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function App() {
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
        <Route path="/services" element={<About />} />
        <Route path="/page4" element={<About />} />
        <Route path="/contact" element={<About />} />
        <Route path="/appointments" element={<About />} />
        
      </Routes>
      
    </>
  );
}