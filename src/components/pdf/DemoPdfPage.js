import React from "react";
import SinglePagePDFViewer from "./SinglePage";
import AllPagesPDFViewer from "./AllPages";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
const samplePDF = "http://localhost:3000/cuengine-portal-theme/assets/aboutturkey/WhyTurkey.pdf";

export default function DemoPdfPage() {
  return (
    <div className="container">
      <p>samplePDF {samplePDF}</p>
      <h4>Single Page</h4>
      {/* <SinglePagePDFViewer pdf={samplePDF} /> */}

      <hr />

      <h4>All Pages</h4>
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={samplePDF} />
      </div>

      <hr />
    </div>
  );
}
