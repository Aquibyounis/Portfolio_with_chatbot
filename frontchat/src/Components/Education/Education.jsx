import React, { useEffect, useRef, useState } from "react";
import "./Education.css";

const Education = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
  }, []);

  return (
    <div
      className={`edu-container ${isVisible ? "active" : ""}`}
      ref={containerRef}
    >
      <div className="inner-container">

        {/* ================= EDUCATION ================= */}
        <div className="edu-card">
          <h2>Education</h2>

          {/* College */}
          <div className="edu-section">
            <h3>College</h3>
            <table className="edu-table">
              <tbody>
                <tr>
                  <td><strong>Name</strong></td>
                  <td>Vellore Institute of Technology, Amaravati</td>
                </tr>
                <tr>
                  <td><strong>Degree</strong></td>
                  <td>B.Tech in Computer Science</td>
                </tr>
                <tr>
                  <td><strong>CGPA</strong></td>
                  <td>8.64 / 10</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Intermediate */}
          <div className="edu-section">
            <h3>Intermediate</h3>
            <table className="edu-table">
              <tbody>
                <tr>
                  <td><strong>School</strong></td>
                  <td>Sri Chaitanya Boys Junior College</td>
                </tr>
                <tr>
                  <td><strong>Marks</strong></td>
                  <td>90.3%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* High School */}
          <div className="edu-section">
            <h3>High School</h3>
            <table className="edu-table">
              <tbody>
                <tr>
                  <td><strong>School</strong></td>
                  <td>Sri Chaitanya High Schools</td>
                </tr>
                <tr>
                  <td><strong>Marks</strong></td>
                  <td>10 CGPA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= HOBBIES ================= */}
        <div className="hobbies-card">
          <h2>Hobbies</h2>

          {/* Single-column table */}
          <table className="hobby-table">
            <tbody>
              <tr><td>🤖 Coding creative AI projects</td></tr>
              <tr><td>🚀 Watching sci-fi & space documentaries</td></tr>
              <tr><td>🎨 Sketching and art</td></tr>
              <tr><td>🌐 Exploring new tech market</td></tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Education;
