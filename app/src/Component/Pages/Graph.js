import React from 'react';
import '../../App.css';
import KnowledgeGraph from '../KnowledgeGraph';
import LegendBox from '../legendBox'; // Assuming this is the path to your legendBox.js

function Graph(){
  return (
    <div className="graph-container"> {/* Add a container for better layout */}
      <KnowledgeGraph />
      <LegendBox /> 
    </div>
  );
}

export default Graph;
