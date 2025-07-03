import React from 'react';
import { motion } from 'framer-motion';
import './Certificates.css';
import cer1 from "../../assets/c1.png";
import cer2 from "../../assets/c2.png";
import cer3 from "../../assets/c3.png";
import cer4 from "../../assets/c4.png";
import cer5 from "../../assets/c5.png";


// Variant for scroll-triggered animation
const sectionVariant = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Certificates = () => {
  return (
    <div className='certificates'>
      <div className="inner_certificates">

        <motion.div
          className="cer-left"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <div className="l-left">
            <img src={cer1} alt="MERN Certificate" />
          </div>
          <div className="l-right">
            <p>
              Completed <strong style={{ color: "yellow" }}>MERN</strong> full stack course of duration 2 months. It wasn't as easy as seen now, been through highs and lows frequently and complete mastering over only single topic doesn't work in modern world of <strong style={{ color: "aqua" }}>AI</strong> and competition. But hoping this will be of good USE
            </p>
          </div>
        </motion.div>

        <motion.div
          className="cer-right"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <div className="l-left">
            <img src={cer2} alt="MongoDB Certificate" />
          </div>
          <div className="l-right">
            <p>
              A self-paced Learning path! directly connected to <strong style={{ color: "yellow" }}>MongoDB</strong> website, which helped in mastering my skills in MongoDB. Even though this is starting of my DB route, Still got a long way to go and learn new Emerging DataBases <strong style={{ color: "aqua" }}>(VectorDB)</strong>.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="cer-left"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <div className="l-left">
            <img src={cer3} alt="Team Project Certificate" />
          </div>
          <div className="l-right">
            <p>
              My <strong style={{ color: "cyan" }}>1st ever Team</strong> Project on real life bases. Which helped in understanding how team management works and how to split the work between respective interests and all. I <strong style={{ color: "yellow" }}>collaborated</strong> with other campus students and made this. Felt 100% satisfied after completing website, which helped me in making my own <strong style={{ color: "red" }}>websites</strong>.
            </p>
          </div>
        </motion.div>


        <motion.div
          className="cer-right"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <div className="l-left">
            <img src={cer4} alt="Team Project Certificate" />
          </div>
          <div className="l-right">
            <p>
              <strong style={{ color: "cyan" }}>AWS</strong> Cloud Architecture badge. Completed the <strong style={{ color: "yellow" }}>AWS cloud LAB </strong>and got this badge after completing the Hands On lab with real time experience, You can verify this badge by clicking here <strong style={{ color: "red" }}>websites</strong>.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="cer-left"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <div className="l-left">
            <img src={cer5} alt="Team Project Certificate" />
          </div>
          <div className="l-right">
            <p>
              <strong style={{ color: "cyan" }}>Aws </strong> Cloud Foundations badge which helped me in gaining real time experience with <strong style={{ color: "yellow" }}>AWS LABS such as EC2, S3, VPC, IAM roles ,users, policies, Databases like RDS,Aurora and also Serverless deployments with Lambda</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;

