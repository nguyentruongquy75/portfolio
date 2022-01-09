import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import Contact from "./components/pages/Contact";
import HomePage from "./components/pages/HomePage";
import Resume from "./components/pages/Resume";
import Work from "./components/pages/Work";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
