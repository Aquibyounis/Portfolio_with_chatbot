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
    title: "Commander NOVA Virtual Astronaut",
    description: "A astronaut which in virtual and help as co-pilot, FUTURISTIC",
    tech: "Langchain, LLM, Ollama, HuggingFace, ChromaDB",
    link: "https://github.com/Aquibyounis/VirtualAstronaut"
  },
  {
    id: '2',
    title: "Smart Notes – AI Summarizer",
    description: "AI-powered notes app that summarizes text using NLP and Transformer models.",
    tech: "Python, Hugging Face, Flask",
    link: "https://github.com/Aquibyounis/Smart_Notes_AI"
  },
  {
    id: '3',
    title: "Weather Detection using YOLO",
    description: "Detects weather conditions in images using YOLO object detection.",
    tech: "YOLOv8,Google Colab, Python",
    link: "https://drive.google.com/drive/folders/12Hhw37UvApFXi1A5-Z6bDI8NH2ZUJyq5?usp=sharing"
  },
  {
    id: '4',
    title: "ShopEZ – Full Stack E-Commerce",
    description: "A modern full-stack shopping app with authentication, cart and built on a team of 4 in SmartBridge",
    tech: "React, Node.js, Express, MongoDB",
    link: "https://github.com/Aquibyounis/Shop-EZ"
  },
  {
    id: '5',
    title: "Personal Portfolio Website",
    description: "My own portfolio showcasing skills, experience.",
    tech: "ReactJS, CSS, AI",
    link: "https://aquibyounis.netlify.app"
  }
];

function SortableItem({ project }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: project.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div className="project-card" ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <i className="fa-solid fa-grip-vertical dots"></i>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <p className="project-tech">🔧 {project.tech}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
        🔗 View Project
      </a>
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

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={projects.map(p => p.id)}
          strategy={verticalListSortingStrategy}
        >
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
