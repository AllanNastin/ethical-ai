import React, { useState } from 'react';
import PDFUpload from './Component/PDFUpload';
import KnowledgeGraph from './Component/KnowledgeGraph';
import logo from './IBM-logo.png'; 
import './App.css';
import graphData from './GraphData'; // Import your sample data

function App() {
  const [graphDataState, setGraphDataState] = useState(graphData);

  const handlePDFUpload = (file) => {
    // TODO: Implement logic to process the uploaded PDF 'file'
    // 1. Extract relevant data from the PDF (nodes, edges)
    // 2. Update 'graphDataState' with the new data
    // 3. Use 'setGraphDataState' to trigger a re-render of the graph
  };

  return (
    <div className="App">
      <div className="nav-bar">
        <img src={logo} className="nav-logo" alt="IBM Logo"/>
      </div>
      <div className="content">
        <h1>IBM Compliance Tool</h1>
        <PDFUpload onUpload={handlePDFUpload} />
        <KnowledgeGraph data={graphData} />
      </div>
    </div>
  );
}

export default App;

