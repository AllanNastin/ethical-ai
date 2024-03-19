import React from 'react';
import './legendBox.css'; 

const legendCategories = [
  { label: 'ORG - Organisations', color: '#2980B9', definitions: [] }, // Blue
  { label: 'PER - Person', color: '#3498DB', definitions: [] }, // Light Blue
  { label: 'LOC - Location', color: '#9B59B6', definitions: [] }, // Violet
  { label: 'DAT - Data', color: '#2ECC71', definitions: [] }, // Green
  { label: 'SYS - System', color: '#E74C3C', definitions: [] }, // Red 
  { label: 'ACT - Action', color: '#34495E', definitions: [] }, // Dark Blue
  { label: 'SPA - Space', color: '#1ABC9C', definitions: [] }, // Light Blue-Green
  { label: 'STA - Standard', color: '#F1C40F', definitions: [] }, // Yellow
  { label: 'ALG - Automated Process or Algorithm', color: '#ED47E6', definitions: [] }, // Vivid Pink 
  { label: 'PRO - Process', color: '#16A085', definitions: [] }, // Teal
  { label: 'HAR - Harm', color: '#C0392B', definitions: [] }, // Deep Red
  { label: 'MAR - Marking', color: '#FF8717', definitions: [] }, // Bright Orange 
  { label: 'DOC - Documentation', color: '#8E44AD', definitions: [] }, // Purple
  { label: 'ETH - Ethical Concept', color: '#3CA4FF', definitions: [] }, // Sky Blue
];

const LegendBox = () => {
  return (
    <div className="legend-container">
      <h2>Legend</h2>
      <ul>
        {legendCategories.map((category) => (
          <li key={category.label}>
            <span className="color-box" style={{ backgroundColor: category.color }}></span>
            {category.label} 
            <ul className="definitions"> 
                {category.definitions.map(def => <li key={def}>{def}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LegendBox;
