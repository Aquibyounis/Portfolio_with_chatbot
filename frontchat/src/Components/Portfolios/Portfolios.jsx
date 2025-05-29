import React from 'react';
import './Portfolios.css';

const Portfolios = () => {
  return (
    <div className="portfolio-section">
      <h2>Other Portfolios I've Built</h2>
      <div className="portfolio-links">
        <a href="https://aquibyounis.netlify.app" target="_blank" rel="noopener noreferrer" className="portfolio-card">
          aquibyounis.netlify.app
        </a>
        <a href="https://portfolio-9jkm-chi.vercel.app/" target="_blank" rel="noopener noreferrer" className="portfolio-card">
          portfolio-9jkm-chi.vercel.app
        </a>
      </div>
    </div>
  );
};

export default Portfolios;
