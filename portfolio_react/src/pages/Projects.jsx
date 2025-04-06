import { useEffect, useState } from "react";
import axios from "axios";
// import Sidebar from "../../components/Sidebar";
import { ArrowUpRight, Globe, Github } from "lucide-react";

// Import local images here
import Shopkart from "../assets/Flipkart.png";
import ebay from "../assets/E-bay.png";
import cinema from "../assets/jio.png"; 

export default function Projects() {
  const [projects, setProjects] = useState([]);

  // Match image keys from Firebase to actual imports
  const imageMap = {
    Shopkart,
    ebay,
    cinema,
  };

  useEffect(() => {
    axios.get("https://portfolio-main-7d511-default-rtdb.firebaseio.com/projectData.json")
      .then((res) => setProjects(res.data)) // <-- fixed here
      .catch((err) => console.error("Failed to fetch project data", err));
  }, []);
  

  return (
    <div className="flex min-h-screen bg-white">

      <main className="ml-[80px] flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">RECENT PROJECT</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="relative group">
                <img
                  src={imageMap[project.image]}
                  alt={project.title}
                  className="w-[580px] h-[280px] p-2 object-cover rounded-lg border-[3px] border-black"
                />
                <div className="mt-2">
                  <div className="text-xs text-gray-500">{project.days}</div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{project.title}</h3>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    <strong>Tech Stack:</strong> {project.techStack}
                  </p>
                  <div className="flex gap-3 mt-3">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-4 py-1 text-sm">
                      <Globe />
                    </a>
                    <a href={project.source} target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-sm rounded-full">
                      <Github />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <button className="px-4 py-2 rounded-full text-sm font-medium flex items-center border">
              LOAD MORE <ArrowUpRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
