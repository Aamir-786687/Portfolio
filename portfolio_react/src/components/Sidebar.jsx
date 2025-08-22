import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Menu, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const activeClass = "border-l-4 border-pink-400 bg-gray-800 text-white";

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-3 sm:top-4 left-3 sm:left-4 z-50 p-1.5 sm:p-2 rounded-md bg-gray-900 text-white"
      >
        <Menu size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Sidebar */}
      <div className={`sidebar fixed top-0 left-0 h-full w-[200px] sm:w-[220px] md:w-[240px] bg-gradient-to-b from-gray-900 to-black flex flex-col justify-between py-4 sm:py-6 px-3 sm:px-4 shadow-xl z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        
        {/* Logo */}
        <div className="text-center">
          <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
           PORTFOLIO
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-6 mt-6 sm:mt-8">
          <Link
            to="/"
            className={`text-sm font-medium px-4 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 
            ${location.pathname === "/" ? activeClass : ""}`}
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>

          <Link
            to="/about"
            className={`text-sm font-medium px-4 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 
            ${location.pathname === "/about" ? activeClass : ""}`}
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </Link>

          <Link
            to="/projects"
            className={`text-sm font-medium px-4 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 
            ${location.pathname === "/projects" ? activeClass : ""}`}
            onClick={() => setIsOpen(false)}
          >
            PROJECTS
          </Link>

          <Link
            to="/education"
            className={`text-sm font-medium px-4 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 
            ${location.pathname === "/education" ? activeClass : ""}`}
            onClick={() => setIsOpen(false)}
          >
            EDUCATION
          </Link>

          <Link
            to="/skills"
            className={`text-sm font-medium px-4 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 
            ${location.pathname === "/skills" ? activeClass : ""}`}
            onClick={() => setIsOpen(false)}
          >
            SKILLS
          </Link>

          <Link
            to="/contact"
            className={`text-sm font-medium px-4 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 
            ${location.pathname === "/contact" ? activeClass : ""}`}
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
        </div>

        {/* Download CV Button */}
        <div className="flex flex-col items-center mb-4 sm:mb-6">
          <a
            href="/Aamir_Ahmad_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-1 sm:gap-2 bg-pink-500 text-white font-semibold px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full shadow-md overflow-hidden transition-all duration-300 hover:bg-white hover:text-pink-500 hover:scale-105 text-xs sm:text-sm"
            onClick={(e) => {
              // Open in new tab
              window.open('/Aamir_Ahmad_Resume.pdf', '_blank');
              // Trigger download
              const link = document.createElement('a');
              link.href = '/Aamir_Ahmad_Resume.pdf';
              link.download = 'Aamir_Ahmad_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download CV
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            </span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center space-y-3 sm:space-y-4 text-gray-300">
          <a href="https://github.com/Aamir-786687" target="_blank" className="hover:text-cyan-400 transition">
            <Github size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </a>
          
          <a href="https://www.linkedin.com/in/ah-aamir/" target="_blank" className="hover:text-cyan-400 transition">
            <Linkedin size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </a>
         
          <div className="text-[6px] sm:text-[7px] md:text-[8px] text-gray-400 mt-3 sm:mt-4 leading-tight text-center">
            © 2025 Aamir Ahmad
            <br />
            All rights reserved.
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
