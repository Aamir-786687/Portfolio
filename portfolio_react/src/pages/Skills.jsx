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
      <main className="w-full flex-1 p-4 sm:p-6 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Technical Skills Section */}
          <div className="mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-center mb-6 sm:mb-8 md:mb-12">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333]">My </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-500">
                Technical Skills
              </span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
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
                     className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 mb-2 sm:mb-3 md:mb-4 transform transition-transform duration-300 group-hover:scale-110"
                   />
                                     <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium opacity-0 bg-[#3333] p-1 rounded group-hover:opacity-100 group-hover:text-black group-hover:font-bold transition-all duration-300">
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
