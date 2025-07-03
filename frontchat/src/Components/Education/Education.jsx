import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="edu-container">
      {/* Education Card */}
      <div className="edu-card">
        <h2>Education</h2>
        <div className="edu-section">
          <h3>College</h3>
          <p><strong>Name:</strong> Vellore Institute of Technology, Amaravati</p>
          <p><strong>Degree:</strong> B.Tech in Computer Science</p>
          <p><strong>CGPA:</strong> 8.64 / 10</p>
        </div>

        <div className="edu-section">
          <h3>Intermediate</h3>
          <p><strong>School:</strong>Sri chaitanya boys Junior College</p>
          <p><strong>Marks:</strong> 90.3%</p>
        </div>

        <div className="edu-section">
          <h3>High School</h3>
          <p><strong>School:</strong> Sri chaitanya High Schools</p>
          <p><strong>Marks:</strong> 10 CGPA</p>
        </div>
      </div>

      {/* Hobbies Card */}
      <div className="hobbies-card">
        <h2>Hobbies</h2>
        <ul>
          <li>Coding creative AI projects 🤖</li>
          <li>Watching sci-fi & space documentaries 🚀</li>
          <li>Sketching and digital art 🎨</li>
          <li>Exploring futuristic tech 🌐</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
