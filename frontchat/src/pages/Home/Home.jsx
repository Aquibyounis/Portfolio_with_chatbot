import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

// --- YOUR ORIGINAL IMPORTS ---
import MainBar from "../../Components/Main_bar/MainBar.jsx";
import CommandBar from "../../Components/CommandBar/CommandBar.jsx";
import Contact from "../../Components/Contact/Contact.jsx";
import About from "../../Components/About/About.jsx";
import Links from "../../Components/Links/Links.jsx";
import Skills from "../../Components/Skills/Skills.jsx";
import Portfolios from "../../Components/Portfolios/Portfolios.jsx";
import RippleEffect from "../../Components/RippleEffect/RippleEffect.jsx";
import Dashboard from '../../Components/dashboard/dashboard.jsx';
import Education from '../../Components/Education/Education.jsx';

import "./Home.css";

// --- RIVER BACKGROUND COMPONENT ---
const RiverBackground = () => {
  const [pathD, setPathD] = useState("");
  const [svgHeight, setSvgHeight] = useState(0);

  // Calculate the path based on the document height
  useEffect(() => {
    const calculatePath = () => {
      // We want the river to span the entire height of the content
      const width = window.innerWidth;
      const height = document.body.scrollHeight; 
      setSvgHeight(height);

      // Configuration for the "Meandering River"
      const startX = -50; 
      const startY = 0;
      
      const curves = 6; // How many bends in the river
      const sectionHeight = height / curves;
      const amplitude = width * 0.4; // How wide the river swings (40% of screen)
      const centerX = width * 0.5;

      let d = `M ${startX} ${startY}`;

      // Generate points
      for (let i = 0; i <= curves; i++) {
        const y = i * sectionHeight;
        // Alternate X position: Center - Amp, Center + Amp
        const xOffset = Math.sin(i * 1.5) * amplitude; 
        const x = centerX + xOffset;

        // Smooth cubic bezier curves
        if (i === 0) {
           d = `M ${x} ${startY}`;
        } else {
           const prevY = (i - 1) * sectionHeight;
           const prevXOffset = Math.sin((i - 1) * 1.5) * amplitude;
           const prevX = centerX + prevXOffset;
           
           const cp1x = prevX; 
           const cp1y = prevY + sectionHeight * 0.5;
           
           const cp2x = x;
           const cp2y = y - sectionHeight * 0.5;

           d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`;
        }
      }

      setPathD(d);
    };

    calculatePath();
    const observer = new ResizeObserver(calculatePath);
    if (document.body) observer.observe(document.body);

    window.addEventListener('resize', calculatePath);
    return () => {
        window.removeEventListener('resize', calculatePath);
        observer.disconnect();
    };
  }, []);

  return (
    <div className="river-container">
      <svg
        width="100%"
        height={svgHeight}
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FF33FF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#0077ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00f2ff" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
             <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
             <feMerge>
                 <feMergeNode in="coloredBlur"/>
                 <feMergeNode in="SourceGraphic"/>
             </feMerge>
          </filter>
        </defs>
        
        {/* The Broad River Path */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#riverGradient)"
          strokeWidth="60" /* Broad stroke */
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
             // This binds the path drawing to the scroll position
             pathLength: useScroll().scrollYProgress
          }}
        />
        
        {/* Optional: A thinner, brighter core line for detail */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="#000000"
          strokeWidth="20"
          strokeDasharray="10 20"
          strokeLinecap="round"
          style={{
             pathLength: useScroll().scrollYProgress
          }}
        />
      </svg>
    </div>
  );
};

// --- YOUR ORIGINAL VARIANTS ---
const sectionVariant = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const sectionVariant2 = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 20,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Home = () => {
  return (
    <div className="home" style={{ position: 'relative' }}>
        {/* Internal styles to make the river work without editing css file */}
        <style>{`
            .river-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 0; 
                overflow: hidden;
            }
            /* Ensure your content sits above the river */
            .home > div:not(.river-container) {
                position: relative;
                z-index: 2;
            }
        `}</style>

      {/* 1. The River Background Layer */}
      <RiverBackground />

      <MainBar />

      <motion.div id="command" variants={sectionVariant2} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
        <CommandBar />
      </motion.div>

      <motion.div id="about" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
        <About />
      </motion.div>

      <motion.div id="dashboard" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
        <Dashboard />
      </motion.div>

      <motion.div id="skills" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
        <Skills />
      </motion.div>

      <motion.div id="education" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
        <Education />
      </motion.div>

      <motion.div id="links" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
        <Links />
      </motion.div>

      <motion.div id="contact" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ amount: 0.1 }}>
        <Contact />
      </motion.div>

      <motion.div id="portfolio" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
        <Portfolios />
      </motion.div>

      <RippleEffect />

    </div>
  );
};

export default Home;