import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Menu } from "lucide-react";
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
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-900 text-white"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div className={`sidebar fixed top-0 left-0 h-full w-[240px] bg-gradient-to-b from-gray-900 to-black flex flex-col justify-between py-6 px-4 shadow-xl z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        
        {/* Logo */}
        <div className="text-center">
          <div className="text-3xl font-extrabold text-white tracking-tight">
            A A
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-6 mt-8">
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

        {/* Social Icons */}
        <div className="flex flex-col items-center space-y-4 text-gray-300">
          <a href="https://github.com/Aamir-786687" target="_blank" className="hover:text-cyan-400 transition">
            <Github size={18} />
          </a>
          
          <a href="https://www.linkedin.com/in/ah-aamir/" target="_blank" className="hover:text-cyan-400 transition">
            <Linkedin size={18} />
          </a>
         
          <div className="text-[8px] text-gray-400 mt-4 leading-tight text-center">
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
