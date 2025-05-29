import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RippleEffect = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const newRipple = {
        id: Date.now(),
        x,
        y,
      };
      setRipples((prev) => [...prev, newRipple]);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prev) => prev.slice(1));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none", // Let clicks go through
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        {ripples.map(({ id, x, y }) => (
          <motion.span
            key={id}
            initial={{ opacity: 0.5, scale: 0 }}
            animate={{ opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundColor: "white",
              pointerEvents: "none", // ripples themselves don’t block clicks
              transformOrigin: "center",
              marginLeft: -50,
              marginTop: -50,
              mixBlendMode: "screen",
              userSelect: "none",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RippleEffect;
