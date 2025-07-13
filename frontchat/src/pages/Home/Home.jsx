// src/Pages/Home/Home.jsx
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
import Dashboard from '../../Components/dashboard/dashboard.jsx';

import "./Home.css";
import Education from '../../Components/Education/Education.jsx';

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
    <div className="home">
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
