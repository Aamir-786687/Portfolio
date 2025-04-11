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
      <main className="w-full md:ml-[240px] flex-1 p-4 sm:p-6 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Technical Skills Section */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="mb-8 sm:mb-12">
              <span className="text-3xl sm:text-4xl font-bold text-[#333]">My </span>
              <span className="text-3xl sm:text-4xl font-bold text-pink-500">
                Technical Skills
              </span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={skill.image || "/placeholder.svg"}
                    alt={skill.name}
                    width={120}
                    height={120}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-2 sm:mb-4 transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-sm sm:text-base md:text-lg font-medium opacity-0 bg-[#3333] p-1 rounded group-hover:opacity-100 group-hover:text-black group-hover:font-bold transition-all duration-300">
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
