import React from 'react';
import './CommandBar.css';

const CommandBar = () => {
  return (
    <div className="command-container">
      <h1 className='tag_h1'>Hello I am Peanut... (Personal AI Assistant)</h1>
      <input
        type="text"
        placeholder="Ask me anything ..."
        className="command-input"
      />
      <button className="send-btn">
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default CommandBar;
