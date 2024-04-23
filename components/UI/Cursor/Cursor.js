import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function CustomCursor() {
  const [isExpanded, setIsExpanded] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Keep the cursor centered around the mouse point
      x.set(e.clientX - (isExpanded ? 200 : 10));
      y.set(e.clientY - (isExpanded ? 200 : 10));
    };

    const handleMouseOver = (e) => {
      if (e.target.getAttribute('data-cursor-type') === 'hover') {
        setIsExpanded(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.getAttribute('data-cursor-type') === 'hover') {
        setIsExpanded(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [x, y, isExpanded]);  // Ensure the event handlers are updated when isExpanded changes

  return (
    <motion.div
    className=""
      style={{ 
        position: "fixed", 
        height: isExpanded ? 400 : 20, 
        width: isExpanded ? 400 : 20, 
        background: "#F5D042",  
        borderRadius: "50%", 
        zIndex: 1000, 
        x: springX, 
        y: springY,
        pointerEvents: "none",

        transition: "width 0.3s, height 0.3s, mix-blend-mode 0.3s, backgroundColor 0.3s",
        transformOrigin: "center",
        mixBlendMode: isExpanded ? "difference" : "none",  // Invert colors only when expanded
        color: "#000000"
      }}
    />
  );
}

export default CustomCursor;
