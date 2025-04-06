import { useEffect, useState } from "react";
import axios from "axios";
import { Globe, Github } from "lucide-react";

import Shopkart from "../assets/Flipkart.png";
import ebay from "../assets/E-bay.png";
import hotstar from "../assets/hotstar.png";
import portfolio from "../assets/Portfolio.png";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const imageMap = {
    Shopkart,
    ebay,
    hotstar,
    portfolio,
  };

  useEffect(() => {
    axios.get("https://portfolio-main-7d511-default-rtdb.firebaseio.com/projectData.json")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Failed to fetch project data", err));
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      <main className="ml-[80px] flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">RECENT PROJECT</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-100 rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={imageMap[project.image]}
                  alt={project.title}
                  className="w-auto h-auto object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{project.days}</p>
                  <p className="text-sm text-gray-700 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    <strong>Tech Stack:</strong> {project.techStack}
                  </p>
                  <div className="flex gap-4">
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:underline"
                      >
                        <Globe className="w-4 h-4 mr-1" /> Live
                      </a>
                    )}
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-800 hover:underline"
                    >
                      <Github className="w-4 h-4 mr-1" /> Code
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
