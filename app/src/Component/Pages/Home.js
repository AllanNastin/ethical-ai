import React from 'react';
import '../../App.css';
import PDFUpload from '../PDFUpload';
import { useNavigate } from 'react-router-dom';
import leftImage from '../Images/home.png'; 

function Home({ onUploadSuccess }) {
  const navigate = useNavigate();

  const handlePDFUpload = (file) => {
    onUploadSuccess();
    navigate("/graph");
  };

const handleButtonClick = () => {
  // test get
  fetch('http://localhost:8000')
    .then(response => response.text())
    .then(data => console.log(data));
}

  return (
    <div className="home">
      <div className="home-content">
        <div className="home-image-container">
          <img src={leftImage} alt="AI Concept" className="home-image" />
        </div>
        <div className="home-text">
          <h1>Creating Trustworthy and Ethical AI</h1>
          <p>Test your AI model to see if it is compliant with the EU AI Act</p>
          {/* sample button to test fetch */}
          <button onClick={handleButtonClick}>Test Fetch</button>
          <PDFUpload onUpload={handlePDFUpload} />
        </div>
      </div>
    </div>
  );
}

export default Home;