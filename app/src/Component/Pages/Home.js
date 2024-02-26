import React from 'react';
import '../../App.css';
import PDFUpload from '../PDFUpload';
import { useNavigate } from 'react-router-dom';
import leftImage from '../Images/home.png'; 

function Home({ onUploadSuccess }) {
  const navigate = useNavigate();

  const handlePDFUpload = (file) => {
    let formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        onUploadSuccess();
        navigate("/graph");
      })
      .catch(error => console.log('There was a problem with the fetch operation: ' + error.message));
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