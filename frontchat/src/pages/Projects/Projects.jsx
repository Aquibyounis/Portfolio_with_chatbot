import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Commander NOVA Virtual Astronaut",
    description: "A astronaut which in virtual and help as co-pilot, FUTURISTIC",
    tech: "Langchain, LLM, Ollama, HuggingFace, ChromaDB",
    link: "https://github.com/Aquibyounis/VirtualAstronaut"
  },
  {
    title: "Smart Notes – AI Summarizer",
    description: "AI-powered notes app that summarizes text using NLP and Transformer models.",
    tech: "Python, Hugging Face, Flask",
    link: "https://github.com/Aquibyounis/Smart_Notes_AI"
  },
  {
    title: "Weather Detection using YOLO",
    description: "Detects weather conditions in images using YOLO object detection.",
    tech: "YOLOv8,Google Colab, Python",
    link: "https://drive.google.com/drive/folders/12Hhw37UvApFXi1A5-Z6bDI8NH2ZUJyq5?usp=sharing"
  },
  {
    title: "ShopEZ – Full Stack E-Commerce",
    description: "A modern full-stack shopping app with authentication, cart and built on a team of 4 in SmartBridge",
    tech: "React, Node.js, Express, MongoDB",
    link: "https://github.com/Aquibyounis/Shop-EZ"
  },
  {
    title: "Personal Portfolio Website",
    description: "My own portfolio showcasing skills, experience.",
    tech: "ReactJS, CSS, AI",
    link: "https://aquibyounis.netlify.app"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <p className="project-tech">🔧 {project.tech}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
