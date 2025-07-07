// File: src/components/CustomCursor.jsx
import React, { useEffect, useState } from 'react';
import '../styles/customcursor.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, .service-card, .stat-item').forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', move);
      document.querySelectorAll('a, button, .service-card, .stat-item').forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <div
      className={`cursor${hovering ? ' hover' : ''}`}
      style={{ left: position.x, top: position.y }}
    />
  );
}
