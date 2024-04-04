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
        return response.json(); // Get the response as json
      })
      .then(data => {
        // Split the text by line and parse each line as JSON
        const { factsheet_data, rules_mining_data } = data;
        // Store the JSONL data in local storage
        localStorage.setItem('factsheetData', JSON.stringify(factsheet_data));
        localStorage.setItem('rulesMiningData', JSON.stringify(rules_mining_data));
        onUploadSuccess();
        navigate("/graph");
      })
      .catch(error => console.log('There was a problem with the fetch operation: ' + error.message));
  };

  // const handleButtonClick = () => {
  //   // test get
  //   fetch('https://group22.api.sprinty.tech/')
  //     .then(response => response.text())
  //     .then(data => console.log(data));
  // }

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
          {/* <button onClick={handleButtonClick}>Test Fetch {"(Check Console)"}</button> */}
          <PDFUpload onUpload={handlePDFUpload} />
        </div>
      </div>
    </div>
  );
}

export default Home;