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
        return response.text(); // Get the response as text
      })
      .then(text => {
        // Split the text by line and parse each line as JSON
        const jsonlData = text.split('\n').filter(line => line.trim() !== '').map(line => JSON.parse(line));
        // Store the JSONL data in local storage
        localStorage.setItem('data', JSON.stringify(jsonlData));
        onUploadSuccess();
        navigate("/graph");
      })
      .catch(error => console.log('There was a problem with the fetch operation: ' + error.message));
  };

// const handleButtonClick = () => {
//   // test get
//   fetch('http://localhost:8000')
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