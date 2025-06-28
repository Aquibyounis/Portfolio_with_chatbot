import React from 'react';
import { motion } from 'framer-motion';

import MainBar from "../../Components/Main_bar/MainBar.jsx";
import CommandBar from "../../Components/CommandBar/CommandBar.jsx";
import Contact from "../../Components/Contact/Contact.jsx";
import About from "../../Components/About/About.jsx";
import Links from "../../Components/Links/Links.jsx";
import Skills from "../../Components/Skills/Skills.jsx";
import Portfolios from "../../Components/Portfolios/Portfolios.jsx";
import RippleEffect from "../../Components/RippleEffect/RippleEffect.jsx";

import "./Home.css";
import Dashboard from '../../Components/dashboard/dashboard.jsx';

// Animation variant for scroll-triggered sections
const sectionVariant = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Home = () => {
  return (
    <div className="home">
      <MainBar />

      {/* CommandBar placed right under MainBar */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.0 }}
      >
        <CommandBar />
      </motion.div>

      {/* About Section */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <About />
      </motion.div>

      {/* dashboard Section */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <Dashboard />
      </motion.div>

      {/* Skills Section */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <Skills />
      </motion.div>


      {/* Links Section */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <Links />
      </motion.div>

      
      {/* Contact Section */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
      >
        <Contact />
      </motion.div>

      {/* Portfolios Section */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <Portfolios />
      </motion.div>

      {/* Global Ripple Effect overlay (non-blocking) */}
      <RippleEffect />
    </div>
  );
};

export default Home;
