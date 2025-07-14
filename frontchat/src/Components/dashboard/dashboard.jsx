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
  { skill: 'ML/DL/NLP', knowledge: 50 },
  { skill: 'LangChain', knowledge: 60 },
  { skill: 'ChromaDB', knowledge: 45 },
  { skill: 'HuggingFace', knowledge: 20 },
  { skill: 'GITHUB', knowledge: 90 },
  { skill: 'AWS EC2', knowledge: 70 },
  { skill: 'MongoDB', knowledge: 50 },
  { skill: 'SQL', knowledge: 50 },
  { skill: 'ReactJS', knowledge: 90 },
  { skill: 'Java', knowledge: 70 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">🧠 Knowledge Dashboard</h2>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          
          <XAxis
            dataKey="skill"
            tick={{
              fill: '#051822FF',
              fontSize: 12,
              fontWeight: '500',
            }}
            interval={0}
            angle={-35}
            textAnchor="end"
          />
          
          <YAxis
            domain={[0, 100]}
            tick={{
              fill: '#043415FF',
              fontSize: 12,
              fontWeight: '600',
            }}
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
