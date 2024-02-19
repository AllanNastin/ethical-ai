import React, { useState } from 'react';
import UserInputForm from './Component/UserInputForm';
import PDFUpload from './Component/PDFUpload';
import KnowledgeGraph from './Component/KnowledgeGraph';
import graphData from './GraphData'; // Import your sample data

function App() {
  const [graphDataState, setGraphDataState] = useState(graphData);

  const handleFormSubmit = (input) => {
    // TODO: Implement logic to process the form input 'input'
    // 1. Parse the input to extract relevant data (nodes, edges)
    // 2. Update 'graphDataState' with the new data
    // 3. Use 'setGraphDataState' to trigger a re-render of the graph
  };

  const handlePDFUpload = (file) => {
    // TODO: Implement logic to process the uploaded PDF 'file'
    // 1. Extract relevant data from the PDF (nodes, edges)
    // 2. Update 'graphDataState' with the new data
    // 3. Use 'setGraphDataState' to trigger a re-render of the graph
  };

  return (
    <div className="App">
      <UserInputForm onSubmit={handleFormSubmit} />
      <PDFUpload onUpload={handlePDFUpload} />
      <KnowledgeGraph data={graphDataState} /> 
    </div>
  );
}

export default App;

