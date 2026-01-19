import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Certificates.css';

import cer1 from '../../assets/c1.png';
import cer2 from '../../assets/c2.png';
import cer3 from '../../assets/c3.png';
import cer4 from '../../assets/c4.png';
import cer5 from '../../assets/c5.png';
import cer6 from '../../assets/c6.png';
import cer7 from '../../assets/c7.jpg';

// All certificates and badges merged into single flow
const certificateData = [
  {
    id: 1,
    title: 'Oracle Generative AI',
    image: cer6,
    description:
      'Completed Oracle GEN AI certification. Finally got a grip in LLM and AI along with VectorDB and RAG. This certification validated my expertise in modern AI technologies and cloud-based generative AI solutions.',
  },
  {
    id: 2,
    title: 'MERN Full Stack',
    image: cer1,
    description:
      'Completed MERN full stack course of duration 2 months. Been through highs and lows frequently. Complete mastering over multiple topics is essential in the modern world of AI and competition.',
  },
  {
    id: 3,
    title: 'MongoDB Certified',
    image: cer2,
    description:
      'A self-paced learning path directly connected to MongoDB website. Mastered skills in MongoDB including aggregations, indexing, and schema design. Starting of my database learning journey.',
  },
  {
    id: 4,
    title: 'Team Project Lead',
    image: cer3,
    description:
      'My first ever team project on real-life basis. Learned team management, work distribution, and collaboration with other campus students. Felt 100% satisfied after completing the website.',
  },
  {
    id: 5,
    title: 'AWS Cloud Architecture',
    image: cer4,
    description:
      'AWS Cloud Architecture badge. Completed the AWS cloud LAB with real-time hands-on experience in cloud infrastructure, scalability patterns, and best practices.',
  },
  {
    id: 6,
    title: 'Oracle GenAI Badge',
    image: cer7,
    description:
      'Completed Oracle GEN AI course of self-based learning path. Gained experience in hands-on lab for RAG, VectorDB, and cloud integration of Oracle with AI models.',
  },
  {
    id: 7,
    title: 'AWS Foundations',
    image: cer5,
    description:
      'AWS Cloud Foundations badge with real-time experience in AWS Labs including EC2, S3, VPC, IAM roles, users, policies, databases like RDS, Aurora, and serverless deployments with Lambda.',
  },
];

// Certificate Card Component
const CertificateCard = ({ certificate, index, onCardClick }) => {
  return (
    <motion.div
      className="cert-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.03, y: -5 }}
      onClick={() => onCardClick(certificate)}
    >
      <div className="cert-card-glow" />
      <div className="cert-card-content">
        <div className="cert-image-container">
          <img src={certificate.image} alt={certificate.title} className="cert-image" />
        </div>
        <h3 className="cert-title">{certificate.title}</h3>
        <p className="cert-description">{certificate.description.substring(0, 60)}...</p>
      </div>
      {/* Rhombus Node */}
      <div className="cert-rhombus" />
    </motion.div>
  );
};

// Modal Component
const CertificateModal = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <motion.div
      className="cert-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="cert-modal-content"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="cert-modal-close" onClick={onClose}>
          <span>×</span>
        </button>
        <div className="cert-modal-image-container">
          <img src={certificate.image} alt={certificate.title} className="cert-modal-image" />
        </div>
        <div className="cert-modal-text">
          <h2 className="cert-modal-title">{certificate.title}</h2>
          <p className="cert-modal-description">{certificate.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [columns, setColumns] = useState(3); // Default 3 columns
  const containerRef = useRef(null);

  // Calculate columns based on viewport width
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width <= 500) setColumns(1);
      else if (width <= 768) setColumns(2);
      else setColumns(3); // Default 3
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Handle keyboard escape to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedCertificate) {
        setSelectedCertificate(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCertificate]);

  /*
   * Mirror S Pattern:
   * Row 1 (L→R): [1] → [2] → [3]
   *                          ↓
   * Row 2 (R→L): [6] ← [5] ← [4]
   *               ↓
   * Row 3 (L→R): [7] → [8] → [9]
   */

  const buildRows = () => {
    const rows = [];
    let index = 0;
    let rowIndex = 0;

    while (index < certificateData.length) {
      const isRightToLeft = rowIndex % 2 === 1;
      const rowItems = [];

      for (let i = 0; i < columns && index < certificateData.length; i++) {
        rowItems.push({
          ...certificateData[index],
          originalIndex: index,
        });
        index++;
      }

      rows.push({
        items: isRightToLeft ? [...rowItems].reverse() : rowItems,
        isRightToLeft,
        isLastRow: index >= certificateData.length,
      });

      rowIndex++;
    }

    return rows;
  };

  const rows = buildRows();

  return (
    <div className="certificates-container" ref={containerRef}>
      {/* Background Effects */}
      <div className="cert-bg-gradient" />
      <div className="cert-bg-grid" />

      {/* Section Header */}
      <motion.div
        className="cert-section-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="cert-section-title">Certifications</h1>
        <p className="cert-section-subtitle">Credentials that validate my expertise</p>
      </motion.div>

      {/* Snake Layout */}
      <div className="cert-snake-wrapper" style={{ '--columns': columns }}>
        {rows.map((row, rowIdx) => (
          <React.Fragment key={`row-${rowIdx}`}>
            {/* Row of cards */}
            <div className={`cert-row ${row.isRightToLeft ? 'row-rtl' : 'row-ltr'}`}>
              {row.items.map((cert, cardIdx) => (
                <div className="cert-card-wrapper" key={cert.id}>
                  <CertificateCard
                    certificate={cert}
                    index={cert.originalIndex}
                    onCardClick={setSelectedCertificate}
                  />
                  {/* Horizontal connecting line (between cards in same row) */}
                  {cardIdx < row.items.length - 1 && (
                    <div className="connect-line connect-horizontal" />
                  )}
                </div>
              ))}
            </div>

            {/* Vertical connector between rows */}
            {!row.isLastRow && (
              <div className={`row-connector ${row.isRightToLeft ? 'connector-left' : 'connector-right'}`}>
                <div className="connect-line connect-vertical" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal
            certificate={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
