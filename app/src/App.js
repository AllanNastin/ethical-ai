import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Pages/Home';
import Graph from './Component/Pages/Graph';
import Navbar from './Component/NavBar';
import About from './Component/Pages/About'
import './App.css';

function App() {
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleUploadSuccess = () => {
    setUploadSuccess(true);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home onUploadSuccess={handleUploadSuccess} />} />
        <Route path='/graph' element={<Graph uploadSuccess={uploadSuccess} />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
