import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin  } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  const activeClass = "border-l-4 border-pink-400 bg-gray-800 text-white";

  return (
    <div className="sidebar fixed top-0 left-0 h-full w-[240px] bg-gradient-to-b from-gray-900 to-black flex flex-col justify-between py-6 px-4 shadow-xl z-50">
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
        >
          {" "}
          HOME
        </Link>

        <Link
          to="/about"
          className={`text-sm font-medium px-4 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 
        ${location.pathname === "/about" ? activeClass : ""}`}
        >
          ABOUT
        </Link>

        <Link
          to="/projects"
          className={`text-sm font-medium px-4 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 
        ${location.pathname === "/projects" ? activeClass : ""}`}
        >
          {" "}
          PROJECTS
        </Link>

        <Link
          to="/education"
          className={`text-sm font-medium px-4 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 
        ${location.pathname === "/education" ? activeClass : ""}`}
        >
          {" "}
          EDUCATION{" "}
        </Link>

        <Link
          to="/skills"
          className={`text-sm font-medium px-4 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 
        ${location.pathname === "/skills" ? activeClass : ""}`}
        >
          SKILLS
        </Link>

        <Link
          to="/contact"
          className={`text-sm font-medium px-4 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 
        ${location.pathname === "/contact" ? activeClass : ""}`}
        >
          CONTACT
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex flex-col items-center space-y-4 text-gray-300">
        <a href="https://github.com/Aamir-786687"target="_blank"className="hover:text-cyan-400 transition">
          <Github size={18} />
        </a>
        
        <a href="https://www.linkedin.com/in/ah-aamir/"target="_blank"className="hover:text-cyan-400 transition">
          <Linkedin  size={18} />
        </a>
       
        <div className="text-[8px] text-gray-400 mt-4 leading-tight text-center">
          © 2025 Aamir Ahmad
          <br />
          All rights reserved.
        </div>
      </div>
    </div>
  );
}
