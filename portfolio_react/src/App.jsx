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
      <div className="flex flex-col md:flex-row bg-white h-screen">
        <Sidebar />
        
        <div className="md:ml-[240px] w-full p-4 md:p-6 h-screen overflow-y-auto overflow-x-hidden"> {/* Responsive padding and margin */}
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
