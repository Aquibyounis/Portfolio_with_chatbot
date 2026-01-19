import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hackathons.css';
import hack_1_img from '../../assets/Hack_1_img.png';

// Hackathon data
const hackathonData = [
  {
    id: 1,
    title: 'AI Hackathon 2026',
    image: hack_1_img,
    description:
      'Solo AI Hackathon conducted by collaboration of Supervity AI company and PythonGURU, Made it to top 15 but was not selected for top 10. Built an AI call analyser for medical field insights generator and next step adviser. Integrated with Telegram using polling for real time updates in N8N.',
  }
];

// Hackathon Card Component
const HackathonCard = ({ hackathon, index, onCardClick }) => {
  return (
    <motion.div
      className="hack-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.03, y: -5 }}
      onClick={() => onCardClick(hackathon)}
    >
      <div className="hack-card-glow" />
      <div className="hack-card-content">
        <div className="hack-image-container">
          <img src={hackathon.image} alt={hackathon.title} className="hack-image" />
        </div>
        <h3 className="hack-title">{hackathon.title}</h3>
        <p className="hack-description">{hackathon.description.substring(0, 60)}...</p>
      </div>
      {/* Rhombus Node */}
      <div className="hack-rhombus" />
    </motion.div>
  );
};

// Modal Component
const HackathonModal = ({ hackathon, onClose }) => {
  if (!hackathon) return null;

  return (
    <motion.div
      className="hack-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="hack-modal-content"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="hack-modal-close" onClick={onClose}>
          <span>×</span>
        </button>
        <div className="hack-modal-image-container">
          <img src={hackathon.image} alt={hackathon.title} className="hack-modal-image" />
        </div>
        <div className="hack-modal-text">
          <h2 className="hack-modal-title">{hackathon.title}</h2>
          <p className="hack-modal-description">{hackathon.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Hackathons = () => {
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [columns, setColumns] = useState(3); // Default 3 columns
  const containerRef = useRef(null);

  // Calculate columns based on viewport width
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width <= 500) setColumns(1);
      else if (width <= 768) setColumns(2);
      else setColumns(3);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Handle keyboard escape to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedHackathon) {
        setSelectedHackathon(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedHackathon]);

  /*
   * Mirror S Pattern:
   * Row 1 (L→R): [1] → [2] → [3]
   *                          ↓
   * Row 2 (R→L): [6] ← [5] ← [4]
   */

  const buildRows = () => {
    const rows = [];
    let index = 0;
    let rowIndex = 0;

    while (index < hackathonData.length) {
      const isRightToLeft = rowIndex % 2 === 1;
      const rowItems = [];

      for (let i = 0; i < columns && index < hackathonData.length; i++) {
        rowItems.push({
          ...hackathonData[index],
          originalIndex: index,
        });
        index++;
      }

      rows.push({
        items: isRightToLeft ? [...rowItems].reverse() : rowItems,
        isRightToLeft,
        isLastRow: index >= hackathonData.length,
      });

      rowIndex++;
    }

    return rows;
  };

  const rows = buildRows();

  return (
    <div className="hackathons-container" ref={containerRef}>
      {/* Background Effects */}
      <div className="hack-bg-gradient" />
      <div className="hack-bg-grid" />

      {/* Section Header */}
      <motion.div
        className="hack-section-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hack-section-title">Hackathons</h1>
        <p className="hack-section-subtitle">Building the future, one hack at a time</p>
      </motion.div>

      {/* Snake Layout */}
      <div className="hack-snake-wrapper" style={{ '--columns': columns }}>
        {rows.map((row, rowIdx) => (
          <React.Fragment key={`row-${rowIdx}`}>
            {/* Row of cards */}
            <div className={`hack-row ${row.isRightToLeft ? 'row-rtl' : 'row-ltr'}`}>
              {row.items.map((hack, cardIdx) => (
                <div className="hack-card-wrapper" key={hack.id}>
                  <HackathonCard
                    hackathon={hack}
                    index={hack.originalIndex}
                    onCardClick={setSelectedHackathon}
                  />
                  {/* Horizontal connecting line (between cards in same row) */}
                  {cardIdx < row.items.length - 1 && (
                    <div className="hack-connect-line hack-connect-horizontal" />
                  )}
                </div>
              ))}
            </div>

            {/* Vertical connector between rows */}
            {!row.isLastRow && (
              <div className={`hack-row-connector ${row.isRightToLeft ? 'connector-left' : 'connector-right'}`}>
                <div className="hack-connect-line hack-connect-vertical" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedHackathon && (
          <HackathonModal
            hackathon={selectedHackathon}
            onClose={() => setSelectedHackathon(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hackathons;