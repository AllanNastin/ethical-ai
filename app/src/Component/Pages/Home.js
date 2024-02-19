import React from 'react';
import '../../App.css';
import PDFUpload from '../PDFUpload';

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

  export default Home;