import React, { useState } from 'react';
import UserInputForm from './Component/UserInputForm';
import PDFUpload from './Component/PDFUpload';
import KnowledgeGraph from './Component/KnowledgeGraph';

function App() {
  const [graphData, setGraphData] = useState(null);

  const handleFormSubmit = (input) => {
    console.log('Submit to backend:', input);
    // Submit input to backend, then update graph data
    // setGraphData(responseData);
  };

  const handlePDFUpload = (file) => {
    console.log('Upload file to backend:', file.name);
    // Upload file to backend, then update graph data
    // setGraphData(responseData);
  };

  return (
    <div className="App">
      <UserInputForm onSubmit={handleFormSubmit} />
      <PDFUpload onUpload={handlePDFUpload} />
      <KnowledgeGraph data={graphData} />
    </div>
  );
}

export default App;
