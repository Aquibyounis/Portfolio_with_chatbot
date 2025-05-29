import React, { useEffect, useRef } from 'react';
import './Certificates.css';
import { motion } from 'framer-motion';

// Replace these paths with your actual image paths
const data = [
  {
    img: '../assets/c1.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.'
  },
  {
    img: '../../assets/c2.png',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'
  },
  {
    img: '../../assets/c3.png',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.'
  }
];

const Certificates = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    line.style.height = `${document.body.scrollHeight}px`;
  }, []);

  return (
    <div className="certificates">
      {/* Vertical Gradient Line */}
      <motion.div
        ref={lineRef}
        initial={{ height: 0 }}
        animate={{ height: '90%' }}
        transition={{ duration: 3 }}
        className="vertical-line"
      />

      {/* Zigzag Certificate Layout */}
      <div className="certificate-container">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`certificate-block ${idx % 2 === 0 ? 'left' : 'right'}`}
          >
            <img src={item.img} alt={`cert-${idx}`} className="certificate-img" />
            <div className="connector" />
            <div className="certificate-text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
