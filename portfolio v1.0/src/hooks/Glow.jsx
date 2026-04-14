import React, { useEffect } from 'react'


const Glow = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 50,
        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(20,20,246,0.1), transparent 50%)`,
        transition: 'background 0.1s',
      }}
    />
  );
};

export default Glow