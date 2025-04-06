import { useEffect, useState } from "react";
import axios from "axios";

export default function Skills() {
  const [technicalSkills, setTechnicalSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get(
          "https://portfolio-main-7d511-default-rtdb.firebaseio.com/technicalSkills.json"
        );
        setTechnicalSkills(res.data || []);
      } catch (error) {
        console.error("Error fetching technical skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      <main className="ml-[80px] flex-1 p-8 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Technical Skills Section */}
          <div className="mb-16">
            <h2 className="text-center mb-12">
              <span className="text-4xl font-bold text-[#333]">My </span>
              <span className="text-4xl font-bold text-pink-500">
                Technical Skills
              </span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center transition-transform duration-300"
                >
                  <img
                    src={skill.image || "/placeholder.svg"}
                    alt={skill.name}
                    width={150}
                    height={150}
                    className="mb-4 transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-lg font-medium opacity-0 bg-[#3333] p-1 rounded group-hover:opacity-100 group-hover:text-black group-hover:font-bold transition-all duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
