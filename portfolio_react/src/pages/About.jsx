import React from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import ME2 from "../assets/NobgAamir.png";
// import ME from "../assets/Aamir Nobg.png";
import emage from "../assets/Quotation.png";

export default function About() {
  return (
    <div className="flex min-h-full bg-white overflow-x-hidden">
      <main className="w-full flex-1">
        <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
          <p className="italic text-sm text-gray-500 text-center ">Nice to meet you!</p>
          
          <h2 className="mb-8 sm:mb-12 text-center">
              <span className="text-3xl sm:text-4xl font-bold text-[#333]">Welcome{' '}</span>
              <span className="text-3xl sm:text-4xl font-bold text-pink-500">
                To...
              </span>
            </h2>


          <div className="flex flex-col lg:flex-row mt-8 md:mt-10 gap-8 md:gap-12">
            {/* LEFT COLUMN */}
            <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
              {/* Contact Info */}
              <div className="space-y-3 sm:space-y-4 mb-6 text-xs sm:text-sm w-full">
                <div className="flex items-center space-x-2">
                  <Phone size={14} className="sm:w-4 sm:h-4" />
                  <span>+91 7065252643</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={14} className="sm:w-4 sm:h-4" />
                  <span>aamir557ahmad@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={14} className="sm:w-4 sm:h-4" />
                  <span>Delhi, India</span>
                </div>
              </div>

              <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] mb-6 flex items-center justify-center bg-gray-50 rounded-full overflow-hidden">
                <img
                  src={ME2}
                  alt="Aamir Ahmad"
                  className="w-full h-full object-contain shadow-lg border-2 border-gray-200"
                  onError={(e) => {
                    console.error('Image failed to load:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                  onLoad={() => console.log('Image loaded successfully:', ME2)}
                />
                {/* Fallback text if image fails to load */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm font-medium" style={{ display: 'none' }}>
                  AAMIR
                </div>
              </div>

              {/* Name and Title */}
              <div className="text-center lg:text-left mb-6">
                <h3 className="text-xl sm:text-2xl font-bold">
                  <span className="text-pink-600">AAMIR AHMAD</span>
                </h3>
                <p className="text-xs sm:text-sm italic">
                  <strong>Full Stack Developer</strong> based in <em>India</em>
                </p>
              </div>


            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-pink-500 text-xl sm:text-2xl md:text-3xl font-bold">
                      600+
                    </span>
                    <span className="text-xs sm:text-sm leading-tight">
                      Git <br /> Commits
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm">
                    I am a Full Stack Developer with a passion for
                    creating clean, minimal, and user-friendly websites.
                  </p>
                </div>

                {/* Projects */}
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-pink-500 text-xl sm:text-2xl md:text-3xl font-bold">5</span>
                    <span className="text-xs sm:text-sm leading-tight">
                      Projects <br /> Completed
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm">
                  While pursuing Full-Stack Web Development at Masai School, I have completed 5
                  hands-on projects that helped me build a strong foundation in web development.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm mb-6 sm:mb-8">
                As a dedicated learner at Masai School, I am gaining real-world
                skills through hands-on projects and daily coding practice. My
                journey is just beginning, and I'm excited to grow further with
                every line of code.
              </p>

              <div className="bg-[#141313] text-white p-3 sm:p-4 md:p-6 rounded-lg italic text-base sm:text-lg md:text-xl flex items-start space-x-3 sm:space-x-4">
                <img src={emage} alt="quote" className="w-10 h-10 sm:w-12 sm:h-12 md:w-18 md:h-18 m-1 sm:m-2" />
                <p className="mt-1 sm:mt-2 md:mt-4 ml-1 sm:ml-2 md:ml-5 text-xs sm:text-sm md:text-base">
                  "I'm Aamir Ahmad from Delhi, and I have completed Full Stack Web Development 
                  at Masai School with a focus on the MERN stack. 
                  I'm passionate about building scalable, user-friendly 
                  applications and continuously improving my skills as a developer."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
