import React, { useState } from 'react';
import './Projects.css';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';

import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';

const initialProjects = [
  {
    id: '1',
    title: "Autonomous QA agent for Automating testing of webpages",
    description: "A Agentic RAG pipeline with ChromaDB built for Automation of testing html web pages.",
    tech: "RAG pipeline, Langchain, Agents, VectorDB, AWS, EC2, Streamlit",
    link: "http://aquibyounisoceanai.duckdns.org/",
    role: "Created RAG + Streamlit + FastAPI pipeline integrated with chromadb and hosted on EC2 instance on AWS. give some supported docs and html code then it will generate test cases and selenium code for testing test cases."
  },
  {
    id: '2',
    title: "Peanut 2.0",
    description: "A Multi-Agentic RAG built using custom MCP and tools.",
    tech: "RAG, LangGraph, Agents, Google Cloud Service, Memory",
    link: "",
    role: "Currently Under Development...."
  },
  {
    id: '3',
    title: "Fresher Nav",
    description: "A virtual AI assistant for college students (VIT-AP).",
    tech: "RAG, Langchain, LLM, Ollama, ChromaDB",
    link: "https://github.com/Aquibyounis/VIT_AP_COMPASS_MODEL2",
    role: "Implemented RAG model with vectorDB, created ChromaDB vectors on custom dataset."
  },
  {
    id: '4',
    title: "Commander NOVA Virtual Astronaut",
    description: "A virtual AI astronaut assisting in futuristic space exploration.",
    tech: "Langchain, LLM, Ollama, HuggingFace, ChromaDB",
    link: "https://github.com/Aquibyounis/VirtualAstronaut",
    role: "Implemented LLM + Langchain, integrated with Ollama and ChromaDB."
  },
  {
    id: '5',
    title: "Smart Notes – AI Summarizer",
    description: "AI-powered notes app that summarizes text using NLP and Transformer models.",
    tech: "Python, Hugging Face, Flask",
    link: "https://github.com/Aquibyounis/Smart_Notes_AI",
    role: "Developed core summarization logic using Transformer models."
  },
  {
    id: '6',
    title: "Weather Detection using YOLO",
    description: "Detects weather conditions in images using YOLO object detection.",
    tech: "YOLOv8, Google Colab, Python",
    link: "https://drive.google.com/drive/folders/12Hhw37UvApFXi1A5-Z6bDI8NH2ZUJyq5?usp=sharing",
    role: "Built model and fine-tuned it for weather classification."
  },
  {
    id: '7',
    title: "ShopEZ – Full Stack E-Commerce",
    description: "Modern full-stack shopping app built in SmartBridge team.",
    tech: "React, Node.js, Express, MongoDB",
    link: "https://github.com/Aquibyounis/Shop-EZ",
    role: "Built UI using React JS. Assisted team in connection of database with backend."
  }
];

function SortableItem({ project }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: project.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  const techList = project.tech.split(',').map(t => t.trim());

  return (
    <div className="project-card" ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <i className="fa-solid fa-grip-vertical dots"></i>
      <h3 className="project-title neon-text">{project.title}</h3>
      <p className="project-desc">{project.description}</p>

      <div className="tech-container">
        {techList.map((tech, index) => (
          <span key={index} className="tech-pill">{tech}</span>
        ))}
      </div>

      <p className="project-role"><i class="fa-solid fa-comments" style={{ color: "cyan" }}></i> {project.role}</p>

      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          🔗 View Project
        </a>
      )}
    </div>
  );
}

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [symbol, setSymbol] = useState("CUT");

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = projects.findIndex(p => p.id === active.id);
      const newIndex = projects.findIndex(p => p.id === over.id);
      setProjects(prev => arrayMove(prev, oldIndex, newIndex));
    }
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <h3 className='sub-section-title'>AI + MERN + N8N + Agentic + Multi Agentic</h3>

      <div className="symbol">
        {symbol === "FULL" ? (
          <h5 onClick={() => setSymbol("CUT")}>
            <i className="fa-solid fa-grip-vertical"></i>
          </h5>
        ) : (
          <h5 onClick={() => setSymbol("FULL")}>
            <i className="fa-solid fa-grip"></i>
          </h5>
        )}
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={projects.map(p => p.id)} strategy={verticalListSortingStrategy}>
          <div className={symbol === "CUT" ? "projects-grid" : "projects-grid2"}>
            {projects.map((project) => (
              <SortableItem key={project.id} project={project} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </section>
  );
};

export default Projects;
