import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import PDFUpload from './Component/PDFUpload';
import KnowledgeGraph from './Component/KnowledgeGraph';
import logo from './ibm1.png';
import './App.css';
import graphData from './GraphData';

function HomePage({ onUploadSuccess }) {
  const navigate = useNavigate();

  const handlePDFUpload = (file) => {
    // Process the uploaded PDF 'file'
    onUploadSuccess(); 
    navigate("/graph");
  };

  return (
    <div className="home">
      <h1 className="home-title">IBM Compliance Tool</h1>
      <PDFUpload onUpload={handlePDFUpload} />
    </div>
  );
}

function App() {
  const [graphDataState, setGraphDataState] = useState(graphData);

  const handleUploadSuccess = () => {
    // Implement logic to process and update state with new graph data
    setGraphDataState(graphData); 
  };

  return (
    <Router>
      <div className="App">
        <div className="nav-bar">
          <img src={logo} className="nav-logo" alt="IBM Logo"/>
          <div className="title">Creating Trustworthy & Ethical AI</div>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage onUploadSuccess={handleUploadSuccess}/>} />
            <Route path="/graph" element={<KnowledgeGraph data={graphDataState} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
