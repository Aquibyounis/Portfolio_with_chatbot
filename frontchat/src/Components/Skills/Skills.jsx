import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (
    <div className='tech'>
      <h1 className='head'>SKILLS</h1>
      <div className="inner_tech">
        
        {/* AI & ML First */}
        <span className='tech_box'>
          <h2>AI <i class="fa-solid fa-laptop-code"></i></h2>
          <div className="com">
            <p className='com_p'>Python</p>
            <p className='com_p'>NumPy</p>
            <p className='com_p'>Pandas</p>
            <p className='com_p'>ML</p>
            <p className='com_p'>DL</p>
            <p className='com_p'>NLP</p>
          </div>
        </span>

        <span className='tech_box'>
          <h2>AGENTIC AI <i class="fa-solid fa-timeline"></i></h2>
          <div className="com">
            <p className='com_p'>n8n</p>
            <p className='com_p'>RAG</p>
          </div>
        </span>

        {/* AI & ML First */}
        <span className='tech_box'>
          <h2>LLM and GenAI <i class="fa-solid fa-brain"></i></h2>
          <div className="com">
            <p className='com_p'>LangChain</p>
            <p className='com_p'>VectorDB</p>
            <p className='com_p'>Chroma</p>
            <p className='com_p'>FAISS</p>
            <p className='com_p'>Ollama</p>
          </div>
        </span>


        {/* Web Dev (MERN) */}
        <span className='tech_box'>
          <h2>Web Development (MERN)</h2>
          <div className="com">
            <p className='com_p'>MongoDB</p>
            <p className='com_p'>Express.js</p>
            <p className='com_p'>React.js</p>
            <p className='com_p'>Node.js</p>
            <p className='com_p'>HTML</p>
            <p className='com_p'>CSS</p>
            <p className='com_p'>Rest API</p>
            <p className='com_p'>FastAPI</p>
          </div>
        </span>

        {/* Programming Languages */}
        <span className='tech_box'>
          <h2>Languages <i class="fa-solid fa-terminal"></i></h2>
          <div className="com">
            <p className='com_p'>Python</p>
            <p className='com_p'>Java</p>
            <p className='com_p'>MySql</p>
          </div>
        </span>

        
        {/* Cloud & Ops */}
        <span className='tech_box'>
          <h2>DevOps & Cloud <i class="fa-solid fa-cloud"></i></h2>
          <div className="com">
            <p className='com_p'>AWS</p>
            <p className='com_p'>EC2</p>
            <p className='com_p'>S3</p>
            <p className='com_p'>IAM</p>
          </div>
        </span>

        {/* Tools */}
        <span className='tech_box'>
          <h2>Tools <i class="fa-solid fa-gear"></i></h2>
          <div className="com">
            <p className='com_p'>Jupyter Notebook</p>
            <p className='com_p'>Git</p>
            <p className='com_p'>GitHub</p>
            <p className='com_p'>Google Colab</p>
          </div>
        </span>
      </div>
    </div>
  )
}

export default Skills
