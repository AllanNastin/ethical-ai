import React from 'react';

function PDFUpload({ onUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
    </div>
  );
}

export default PDFUpload;
