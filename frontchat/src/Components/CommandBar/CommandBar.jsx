import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CommandBar.css';

const CommandBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/assistant');
  };

  return (
    <div className="command-container" >
      <h1 className='tag_h1'>Hello I am Peanut... (Personal AI Assistant)</h1>
      <input
        type="text"
        placeholder="Ask me anything ..."
        className="command-input" onClick={handleClick}
      />
      <button className="send-btns">
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default CommandBar;
