import React from 'react';
import './MiniNav.css';

const sections = [
  { id: 'about', label: <i class="fa-solid fa-house"></i> },
  { id: 'dashboard', label: <i class="fa-solid fa-chart-line"></i> },
  { id: 'skills', label: <i class="fa-solid fa-graduation-cap"></i> },
  { id: 'links', label: <i class="fa-solid fa-link"></i> },
  { id: 'contact', label: <i class="fa-solid fa-id-card"></i> },
  { id: 'portfolio', label: <i class="fa-solid fa-pager"></i> },
];

const MiniNav = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY;
      const yOffset = window.innerHeight / 2 - section.offsetHeight / 2.5;
      window.scrollTo({ top: y - yOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className="mini-nav">
      {sections.map((section) => (
        <div
          key={section.id}
          className="mini-nav-item"
          onClick={() => scrollTo(section.id)}
          title={section.id}
        >
          {section.label}
        </div>
      ))}
    </div>
  );
};

export default MiniNav;
