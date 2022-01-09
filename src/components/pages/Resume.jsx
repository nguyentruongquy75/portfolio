import React, { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import CV from "../../assets/cv/CV.pdf";

// Create new plugin instance

export default function Resume() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js">
      <div
        style={{
          height: "750px",
        }}
      >
        <Viewer fileUrl={CV} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  );
}
