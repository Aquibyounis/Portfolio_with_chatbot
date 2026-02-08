import React from 'react';
import "./Research.css";
// 1. Import the PDF file like any other module
import crc598Pdf from './crc_598.pdf'; 
import par_cer from './participation_cer.png'; 

const Research = () => {
  return (
    <div className='research'>
        <div className="cert-bg-gradient" />
        <div className="cert-bg-grid" />

        <div className="inner_research">
            <div className="research1_1">
                <div className="docpaper">
                    {/* 2. Use the imported variable in the src attribute */}
                    <iframe 
                    className='paper' 
                    src={crc598Pdf}
                    title="CRC 598 Paper" // Added title for accessibility
                    >
                        <p>This browser does not support PDFs. Please download the PDF to view it: <a href={crc598Pdf}>Download PDF</a>.</p>
                    </iframe>
                </div>

                <div className="doc-matter">
                    <div className="top-m"><span className='research1-h1'> Llama 3.2 vs mistral</span> a comparative analysis for university fresher chatbot </div>
                </div>
            </div>
            <div className="research1_2">
                <div className="bottom-m">
                    <p>Many new students who join college face issues to navigate through the new campus life</p>
                    <p className='bottom-line'>To overcome this issue, we wanted to create a AI chatting application for University folks</p>
                    <p>University chat application for students will boost and help their daily productive college life.</p>
                    <p className='bottom-line'>The basic Idea was to fine tune a LLM model and make deploy it</p>
                    <p>But as the campus database will not be kept same and new updates will be release, fine tuning again and again will be costly and time consuming.</p>
                    <p className='bottom-line'>This is where though of RAG was born. This created a solution but choosing correct LLM was tricky.</p>
                </div>
                <div className="list-out">
                    <p>This was an experiment conducted with identical rag environment</p>
                    <p>Keeping same context window, same vector database, same system prompt injection</p>
                    <p>In place of LLM, we used Llama3.2 on local Ollama deployed and mistral respectively and recorded the observations</p>
                </div>
            </div>
            <div className="research1_3">
                <div className="results">
                    <table className="metric-table">
                        <thead>
                            <tr>
                            <th>Metric</th>
                            <th>LLaMA 3.2</th>
                            <th>Mistral</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Average Latency (s)</td>
                            <td>13.7</td>
                            <td>26.1</td>
                            </tr>
                            <tr>
                            <td>Average Output Tokens</td>
                            <td>70</td>
                            <td>83</td>
                            </tr>
                            <tr>
                            <td>Relevance Score</td>
                            <td>3.7</td>
                            <td>4.6</td>
                            </tr>
                            <tr>
                            <td>Fluency Score</td>
                            <td>3.4</td>
                            <td>4.0</td>
                            </tr>
                            <tr>
                            <td>Completeness Score</td>
                            <td>3.9</td>
                            <td>4.8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="par_cer">
                    <img src={par_cer} className='par_cer1' alt="Presentation certificate" />
                </div>
            </div>

        </div>

    </div>
  );
}

export default Research;
