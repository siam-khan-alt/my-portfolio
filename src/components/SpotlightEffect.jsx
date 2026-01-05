'use client';

import { useState, useEffect } from 'react';

export default function SpotlightEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX - 300, y: e.clientY - 300 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="spotlight"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}