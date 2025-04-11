import React from "react";
import Sidebar from "../components/Sidebar";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import ME from "../assets/Aamir Nobg.png";
import emage from "../assets/Quotation.png";

export default function About() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar activePage="about" />
      <main className="w-full md:ml-[180px] flex-1">
        <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
          <p className="italic text-sm text-gray-500">Nice to meet you!</p>
          <h2 className="mb-8 sm:mb-12">
              <span className="text-3xl sm:text-4xl font-bold text-[#333]">Welcome </span>
              <span className="text-3xl sm:text-4xl font-bold text-pink-500">
                To....
              </span>
            </h2>

          <div className="flex flex-col md:flex-row mt-8 md:mt-10 gap-8 md:gap-12">
            {/* LEFT COLUMN */}
            <div className="md:w-1/3 flex flex-col items-center md:items-start">
              {/* Contact Info */}
              <div className="space-y-4 mb-6 text-sm w-full">
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+91 7065252643</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>aamir557ahmad@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>Delhi, India</span>
                </div>
              </div>

              <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] mb-6">
                <img
                  src={ME}
                  alt="Aamir Ahmad"
                  className="rounded-full object-cover w-full h-full bg-gray-200"
                />
              </div>

              {/* Name and Title */}
              <div className="text-center md:text-left mb-6">
                <h3 className="text-2xl font-bold">
                  <span className="text-pink-600">AAMIR AHMAD</span>
                </h3>
                <p className="text-sm italic">
                  <strong>Frontend Developer</strong> based in <em>India</em>
                </p>
              </div>

              {/* Download CV */}
              <a
                href="https://drive.google.com/uc?export=download&id=1k2HeSdWSGQeYIUNXcw16bedTLw4D9Nml"
                download
                className="group relative inline-flex items-center gap-2 bg-black text-white font-semibold px-6 py-3 rounded-full shadow-md overflow-hidden transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
              >
                Download CV
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight />
                </span>
                <span className="absolute inset-0 bg-white opacity-10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></span>
              </a>
            </div>

            {/* RIGHT COLUMN */}
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-pink-500 text-2xl sm:text-3xl font-bold">
                      400+
                    </span>
                    <span className="text-sm leading-tight">
                      Git <br /> Commits
                    </span>
                  </div>
                  <p className="text-sm">
                    I am a frontend web designer & developer with a passion for
                    creating clean, minimal, and user-friendly websites.
                  </p>
                </div>

                {/* Projects */}
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-pink-500 text-2xl sm:text-3xl font-bold">3</span>
                    <span className="text-sm leading-tight">
                      Projects <br /> Completed
                    </span>
                  </div>
                  <p className="text-sm">
                    While I'm currently pursuing frontend web development at
                    Masai School, I've already completed 3 hands-on projects
                    that helped me build a strong foundation in web development.
                  </p>
                </div>
              </div>

              <p className="text-sm mb-8">
                As a dedicated learner at Masai School, I am gaining real-world
                skills through hands-on projects and daily coding practice. My
                journey is just beginning, and I'm excited to grow further with
                every line of code.
              </p>

              <div className="bg-[#141313] text-white p-4 sm:p-6 rounded-lg italic text-lg sm:text-xl flex items-start space-x-4">
                <img src={emage} alt="quote" className="w-12 h-12 sm:w-18 sm:h-18 m-2" />
                <p className="mt-2 sm:mt-4 ml-2 sm:ml-5 text-sm sm:text-base">
                  "I'm Aamir Ahmad from Delhi, currently pursuing Frontend Web
                  Development at Masai School with a focus on React.js. I'm
                  passionate about building user-friendly web applications and
                  growing as a developer."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
