import { useEffect, useState } from "react";
import axios from "axios";
import { Globe, Github } from "lucide-react";
import Shopkart from "../assets/Flipkart.png";
import ebay from "../assets/E-bay.png";
import hotstar from "../assets/hotstar.png";
import portfolio from "../assets/Portfolio.png";
import SS from '../assets/recioe.png'
import chatgptClone from "../assets/chatgptClone.png";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const imageMap = {
    Shopkart,
    ebay,
    hotstar,
    portfolio,
    SS,
    chatgptClone
  };

  useEffect(() => {
    axios.get("https://portfolio-main-7d511-default-rtdb.firebaseio.com/projectData.json")
      .then((res) => setProjects(res.data))
      .catch((error) => console.error("Failed to fetch project data", error));
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      <main className="w-full flex-1 p-4 sm:p-6 md:p-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-6 sm:mb-8 md:mb-12 text-center">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333]">Recent{' '}</span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-500">
              Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-1 justify-center lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-black max-w-md mx-auto md:max-w-4xl lg:max-w-none"
              >
                <img
                  src={imageMap[project.image]}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-52 lg:h-64 object-cover"
                />
                <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                  <h3 className="text-base sm:text-lg md:text-base lg:text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">{project.days}</p>
                  <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
                  <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-gray-500 mb-3 sm:mb-4">
                    <strong>Tech Stack:</strong> {project.techStack}
                  </p>
                  <div className="flex gap-2 sm:gap-3 md:gap-4">
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:underline text-xs sm:text-sm"
                      >
                        <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> Live
                      </a>
                    )}
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-800 hover:underline text-xs sm:text-sm"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
