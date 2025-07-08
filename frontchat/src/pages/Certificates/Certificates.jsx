import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Certificates.css";

import cer1 from "../../assets/c1.png";
import cer2 from "../../assets/c2.png";
import cer3 from "../../assets/c3.png";
import cer4 from "../../assets/c4.png";
import cer5 from "../../assets/c5.png";
import cer6 from "../../assets/c6.png";
import cer7 from "../../assets/c7.jpg";

// Animation variant for scroll trigger
const sectionVariant = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Reusable component
const CertificateCard = ({ img, alt, desc, direction }) => (
  <motion.div
    className={direction === "left" ? "cer-left" : "cer-right"}
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2 }}
  >
    <div className="l-left">
      <img src={img} alt={alt} />
    </div>
    <div className="l-right">
      <p dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  </motion.div>
);

// Data array with your original content
const certificateData = [
  {
    img: cer6,
    alt: "Oracle Generative AI",
    desc: `Completed <strong style="color: yellow">Oracle GEN AI </strong> certification. It wasn't as easy thing to accomplish, Finally got a grip in <strong style="color: aqua">LLM and AI along with VectorDB and RAG</strong>`,
    direction: "right",
    type: "cer",
  },
  {
    img: cer1,
    alt: "MERN Certificate",
    desc: `Completed <strong style="color: yellow">MERN</strong> full stack course of duration 2 months. It wasn't as easy as seen now, been through highs and lows frequently and complete mastering over only single topic doesn't work in modern world of <strong style="color: aqua">AI</strong> and competition. But hoping this will be of good USE`,
    direction: "left",
    type: "cer",
  },
  {
    img: cer2,
    alt: "MongoDB Certificate",
    desc: `A self-paced Learning path! directly connected to <strong style="color: yellow">MongoDB</strong> website, which helped in mastering my skills in MongoDB. Even though this is starting of my DB route, Still got a long way to go and learn new Emerging DataBases <strong style="color: aqua">(VectorDB)</strong>.`,
    direction: "right",
    type: "cer",
  },
  {
    img: cer3,
    alt: "Team Project Certificate",
    desc: `My <strong style="color: cyan">1st ever Team</strong> Project on real life bases. Which helped in understanding how team management works and how to split the work between respective interests and all. I <strong style="color: yellow">collaborated</strong> with other campus students and made this. Felt 100% satisfied after completing website, which helped me in making my own <strong style="color: red">websites</strong>.`,
    direction: "left",
    type: "cer",
  },
  {
    img: cer4,
    alt: "AWS Badge",
    desc: `<strong style="color: cyan">AWS</strong> Cloud Architecture badge. Completed the <strong style="color: yellow">AWS cloud LAB </strong>and got this badge after completing the Hands On lab with real time experience, You can verify this badge by clicking here <strong style="color: red">websites</strong>.`,
    direction: "right",
    type: "badge",
  },
  {
    img: cer7,
    alt: "GENAI BADGE",
    desc: `Completed <strong style="color: yellow">Oracle GEN AI</strong> course of self based learning path. Got experince in hands on lab for <strong style="color: aqua">RAG, VectorDB and also cloud integration of Oracle with Models</strong>.`,
    direction: "left",
    type: "badge",
  },
  {
    img: cer5,
    alt: "AWS Foundations Badge",
    desc: `<strong style="color: cyan">Aws</strong> Cloud Foundations badge which helped me in gaining real time experience with <strong style="color: yellow">AWS LABS such as EC2, S3, VPC, IAM roles ,users, policies, Databases like RDS, Aurora and also Serverless deployments with Lambda</strong>`,
    direction: "right",
    type: "badge",
  },
];

const Certificates = () => {
  const [cer, setCer] = useState("cer");
  const filteredData = certificateData.filter((item) => item.type === cer);

  return (
    <div className="certificates">
      <div className="inner_certificates">
        <div className="sidenav">
          <h2 onClick={() => setCer("cer")} className={cer==="cer" ? "y":"n"}>Certificates</h2>
          <h2 onClick={() => setCer("badge")}  className={cer==="badge" ? "y":"n"}>Badges</h2>
        </div>

        {filteredData.map((item, index) => (
          <CertificateCard
            key={index}
            img={item.img}
            alt={item.alt}
            desc={item.desc}
            direction={item.direction}
          />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
