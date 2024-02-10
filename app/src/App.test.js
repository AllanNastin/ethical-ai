import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders UserInputForm', () => {
  render(<App />);
  
  // Check if UserInputForm is in the document
  const userInputForm = screen.getByText(/Your Question:/i);
  expect(userInputForm).toBeInTheDocument();
});

test('renders PDFUpload', () => {
  render(<App />);
  
  // Check if PDFUpload is in the document
  const pdfUpload = screen.getByRole('textbox');
  expect(pdfUpload).toBeInTheDocument();
});

test('renders KnowledgeGraph', () => {
  render(<App />);
  
  // Check if KnowledgeGraph is in the document
  const knowledgeGraph = screen.getByText(/Graph will render here/i);
  expect(knowledgeGraph).toBeInTheDocument();
});
