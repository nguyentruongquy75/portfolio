import React, { useState } from "react";
import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import CV from "../../assets/cv/CV.pdf";

import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

export default function Resume() {
  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
        <div style={{ height: "750px" }}>
          <Viewer fileUrl={CV} />
        </div>
      </Worker>
    </div>
  );
}
