import React from 'react';
import './CommandBar.css';

const CommandBar = () => {
  return (
    <div className="command-container">
      <input
        type="text"
        placeholder="Ask me anything about my AI projects..."
        className="command-input"
      />
      <button className="send-btn">
        <i class="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default CommandBar;
