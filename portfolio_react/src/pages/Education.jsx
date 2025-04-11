import React from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <main className="w-full md:ml-[240px] flex-1 p-4 sm:p-6 md:p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 font-['Playfair_Display']">
            Education
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-pink-500 mr-3" />
                <h2 className="text-xl font-semibold font-['Playfair_Display']">MASAI School</h2>
              </div>
              <p className="text-gray-600 mb-2 font-['Poppins']">Full Stack Web Development</p>
              <p className="text-gray-500 text-sm font-['Poppins']">2023 - Present</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span className="text-gray-700 font-['Poppins']">
                    Intensive 30-week coding bootcamp
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span className="text-gray-700 font-['Poppins']">
                    Focus on MERN stack development
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span className="text-gray-700 font-['Poppins']">
                    Hands-on project experience
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-pink-500 mr-3" />
                <h2 className="text-xl font-semibold font-['Playfair_Display']">University</h2>
              </div>
              <p className="text-gray-600 mb-2 font-['Poppins']">Bachelor's Degree</p>
              <p className="text-gray-500 text-sm font-['Poppins']">2019 - 2023</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span className="text-gray-700 font-['Poppins']">
                    Computer Science Engineering
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span className="text-gray-700 font-['Poppins']">
                    GPA: 3.8/4.0
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span className="text-gray-700 font-['Poppins']">
                    Dean's List Honors
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Education; 