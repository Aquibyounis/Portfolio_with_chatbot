// src/components/dashboard.jsx
import React from 'react';
import './dashboard.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const data = [
    { skill: 'Python', knowledge: 60 },
    { skill: 'LangChain', knowledge: 40 },
    { skill: 'ML/DL/NLP', knowledge: 50 },
    { skill: 'ChromaDB', knowledge: 30 },
    { skill: 'HuggingFace', knowledge: 20 },
    { skill: 'GITHUB', knowledge: 90 },
    { skill: 'AWS', knowledge: 60 },
    { skill: 'MongoDB', knowledge: 50 },
    { skill: 'SQL', knowledge: 50 },
    { skill: 'ReactJS', knowledge: 90 },
    { skill: 'Java', knowledge: 70 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">🧠 Knowledge Dashboard</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="2 2" />
          
          {/* 🎨 Custom X-axis (bottom) label styling */}
          <XAxis 
            dataKey="skill" 
            tick={{ fill: '#051822FF', fontSize: 14, fontWeight: '550' }} 
          />
          
          {/* Optional: Y-axis label styling */}
          <YAxis 
            domain={[0, 100]} 
            tick={{ fill: '#043415FF', fontSize: 13,fontWeight:'600' }} 
            tickFormatter={(value) => `${value}%`} 
          />
          
          <Tooltip formatter={(value) => `${value}%`} />
          
          <Line
            type="monotone"
            dataKey="knowledge"
            stroke="#202123FF"
            strokeWidth={3}
            dot={{ r: 5, stroke: '#333', strokeWidth: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
