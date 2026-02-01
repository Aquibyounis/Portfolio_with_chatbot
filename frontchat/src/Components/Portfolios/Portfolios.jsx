import React from "react";
import "./Portfolios.css";

const Portfolios = () => {
  return (
    <section className="portfolio-section">
      <h2>Other Portfolios I've Built</h2>

      <div className="portfolio-links">
        <div className="portfolio-card">
          <div className="iframe-wrapper">
            <iframe
              src="https://aquibyounis.netlify.app"
              title="Portfolio Preview"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
