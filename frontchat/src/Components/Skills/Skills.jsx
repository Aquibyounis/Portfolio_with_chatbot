import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="tech">
      <h1 className="head">SKILLS</h1>

      <div className="inner_tech">

        {/* AI */}
        <span className="tech_box">
          <h2>
            AI <i className="fa-solid fa-laptop-code" style={{ color: "#00e5ff" }}></i>
          </h2>
          <div className="com">
            <p className="com_p"><i className="fa-brands fa-python" style={{ color: "#3776AB" }}></i> Python</p>
            <p className="com_p"><i className="fa-solid fa-calculator" style={{ color: "#4CAF50" }}></i> NumPy</p>
            <p className="com_p"><i className="fa-solid fa-table" style={{ color: "#00ACC1" }}></i> Pandas</p>
            <p className="com_p"><i className="fa-solid fa-robot" style={{ color: "#FF4081" }}></i> Machine Learning</p>
            <p className="com_p"><i className="fa-solid fa-brain" style={{ color: "#9C27B0" }}></i> Deep Learning</p>
            <p className="com_p"><i className="fa-solid fa-comment-dots" style={{ color: "#FFC107" }}></i> NLP</p>
          </div>
        </span>

        {/* Agentic AI */}
        <span className="tech_box">
          <h2>
            Agentic AI <i className="fa-solid fa-timeline" style={{ color: "#ff9100" }}></i>
          </h2>
          <div className="com">
            <p className="com_p"><i className="fa-solid fa-diagram-project" style={{ color: "#ff5722" }}></i> n8n</p>
            <p className="com_p"><i className="fa-solid fa-database" style={{ color: "#03A9F4" }}></i> RAG</p>
          </div>
        </span>

        {/* LLM & GenAI */}
        <span className="tech_box">
          <h2>
            LLM & GenAI <i className="fa-solid fa-brain" style={{ color: "#b388ff" }}></i>
          </h2>
          <div className="com">
            <p className="com_p"><i className="fa-solid fa-link" style={{ color: "#673AB7" }}></i> LangChain</p>
            <p className="com_p"><i className="fa-solid fa-database" style={{ color: "#26C6DA" }}></i> Vector DB</p>
            <p className="com_p"><i className="fa-solid fa-layer-group" style={{ color: "#9C27B0" }}></i> Chroma</p>
            <p className="com_p"><i className="fa-solid fa-bolt" style={{ color: "#FFC107" }}></i> FAISS</p>
            <p className="com_p"><i className="fa-solid fa-microchip" style={{ color: "#4CAF50" }}></i> Ollama</p>
          </div>
        </span>

        {/* Web Development */}
        <span className="tech_box">
          <h2>
            Web Development (MERN) <i className="fa-solid fa-code" style={{ color: "#00e676" }}></i>
          </h2>
          <div className="com">
            <p className="com_p"><i className="fa-solid fa-leaf" style={{ color: "#4CAF50" }}></i> MongoDB</p>
            <p className="com_p"><i className="fa-solid fa-rocket" style={{ color: "#FF5722" }}></i> Express.js</p>
            <p className="com_p"><i className="fa-brands fa-react" style={{ color: "#61DAFB" }}></i> React.js</p>
            <p className="com_p"><i className="fa-brands fa-node-js" style={{ color: "#8BC34A" }}></i> Node.js</p>
            <p className="com_p"><i className="fa-brands fa-html5" style={{ color: "#E34F26" }}></i> HTML</p>
            <p className="com_p"><i className="fa-brands fa-css3-alt" style={{ color: "#1572B6" }}></i> CSS</p>
            <p className="com_p"><i className="fa-solid fa-plug" style={{ color: "#FFC107" }}></i> REST API</p>
            <p className="com_p"><i className="fa-solid fa-bolt" style={{ color: "#00BCD4" }}></i> FastAPI</p>
          </div>
        </span>

        {/* Languages */}
        <span className="tech_box">
          <h2>
            Languages <i className="fa-solid fa-terminal" style={{ color: "#cfd8dc" }}></i>
          </h2>
          <div className="com">
            <p className="com_p"><i className="fa-brands fa-python" style={{ color: "#3776AB" }}></i> Python</p>
            <p className="com_p"><i className="fa-brands fa-java" style={{ color: "#f44336" }}></i> Java</p>
            <p className="com_p"><i className="fa-solid fa-database" style={{ color: "#03A9F4" }}></i> MySQL</p>
          </div>
        </span>

        {/* DevOps & Cloud */}
        <span className="tech_box">
          <h2>
            DevOps & Cloud <i className="fa-solid fa-cloud" style={{ color: "#81D4FA" }}></i>
          </h2>
          <div className="com">
            <p className="com_p"><i className="fa-brands fa-aws" style={{ color: "#FF9900" }}></i> AWS</p>
            <p className="com_p"><i className="fa-solid fa-server" style={{ color: "#4CAF50" }}></i> EC2</p>
            <p className="com_p"><i className="fa-solid fa-box" style={{ color: "#03A9F4" }}></i> S3</p>
            <p className="com_p"><i className="fa-solid fa-user-shield" style={{ color: "#9C27B0" }}></i> IAM</p>
          </div>
        </span>

        {/* Tools */}
        <span className="tech_box">
          <h2>
            Tools <i className="fa-solid fa-gear" style={{ color: "#b0bec5" }}></i>
          </h2>
          <div className="com">
            <p className="com_p"><i className="fa-solid fa-book" style={{ color: "#FFEB3B" }}></i> Jupyter Notebook</p>
            <p className="com_p"><i className="fa-brands fa-git-alt" style={{ color: "#F05032" }}></i> Git</p>
            <p className="com_p"><i className="fa-brands fa-github" style={{ color: "#ffffff" }}></i> GitHub</p>
            <p className="com_p"><i className="fa-solid fa-cloud" style={{ color: "#BF8813" }}></i> Google Colab</p>
          </div>
        </span>

      </div>
    </div>
  );
};

export default Skills;
