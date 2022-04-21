import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
let publicPath = process.env.PUBLIC_URL;
pdfjs.GlobalWorkerOptions.workerSrc = publicPath+'/assets/js/pdf.worker.js';

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;


  return (
    <Document
      file={pdf}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1}  className="custom_pdf" scale={0.5}  />
      ))}
    </Document>
  );
}
