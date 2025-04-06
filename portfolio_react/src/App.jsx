// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";
import Education from "./pages/education/Education";

function App() {
  return (
    <Router>
      <div className="flex bg-white">
        <Sidebar />
        
        <div className="ml-[240px] w-full p-6"> {/* Adjust for sidebar width */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
