import React, { useEffect, useState } from 'react';
import './ComplianceScore.css';

function ComplianceScore() {
  const [score, setScore] = useState(0); 
  const [improvements, setImprovements] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      const jsonlData = JSON.parse(storedData);
      const [retrievedScore, retrievedImprovements] = jsonlData[0];
      setScore(retrievedScore);
      setImprovements(retrievedImprovements);
    }
  }, []);
  
    return (
      <div>
      <div className="score-container">
          <div className="score">
            <div className="score-bar">
              <div className="placeholder">{progressBar(100)}</div>
              <div className="score-circle">{progressBar(score, true)}</div>
            </div>
            <div className="score-value">
              <div className="score-name">Score</div>
              <div className="score-number">{Math.round(score)}%</div>
            </div>
          </div>
      </div>
      <div className="text">
      <h2>Our Recommendations:</h2>
        {improvements.map((improvement, index) => (
          <p className="improvement" key={index}>{improvement}</p>
        ))}
      </div>
      </div>
    );
  }
  
  function progressBar(widthPerc, gradient = false) {
    const radius = 200; 
    const strokeWidth = 30; 
    const dashArray = (Math.PI * radius * widthPerc) / 100;
    const svgWidth = radius * 2 + strokeWidth; 
    const svgHeight = radius + strokeWidth;
  
    return (
      <svg width={svgWidth} height={svgHeight}>
        <circle
          cx={radius + (strokeWidth / 2)}
          cy={radius + (strokeWidth / 2)}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDashoffset={-1 * Math.PI * radius}
          strokeDasharray={`${dashArray} 10000`}
          stroke={gradient ? "url(#score-gradient)" : "#e5e5e5"}
        ></circle>
        {gradient && (
          <defs>
            <linearGradient id="score-gradient">
              <stop offset="0%" stopColor="red" />
              <stop offset="25%" stopColor="orange" />
              <stop offset="100%" stopColor="green" />
            </linearGradient>
          </defs>
        )}
      </svg>
    );
  }
  

  export default ComplianceScore;