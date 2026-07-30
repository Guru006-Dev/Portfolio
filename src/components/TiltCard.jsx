import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children, className = "", style = {}, ...props }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse position relative to card center (-0.5 to 0.5)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPx, setCursorPx] = useState({ x: 0, y: 0 });

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(() => mousePos.y * -15), springConfig);
  const rotateY = useSpring(useTransform(() => mousePos.x * 15), springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    setMousePos({ x: xPct, y: yPct });
    setCursorPx({ x: mouseX, y: mouseY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
        ...style
      }}
      className={`relative transition-all duration-200 ease-out ${className}`}
      {...props}
    >
      {/* Magnetic Cursor Glowing Light Overlay */}
      {isHovered && (
        <div 
          className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(400px circle at ${cursorPx.x}px ${cursorPx.y}px, rgba(255, 42, 42, 0.15), transparent 70%)`
          }}
        />
      )}
      {children}
    </motion.div>
  );
};

export default TiltCard;
