// src/pages/Hero.jsx
import Sidebar from "../components/Sidebar";
import { ArrowRight } from "lucide-react";
// import ME from "../assets/Aamir Nobg.png";
import Spline3D from "../components/Spline3D";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white relative">
      <Sidebar />

      {/* Content */}
      <div className="ml-[150px] flex flex-col md:flex-row items-center justify-between w-full px-10 py-20">
        {/* Left Side */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            MY NAME IS <br />
            <span className="text-pink-500 hover:text-black transition-colors duration-400 cursor-pointer">
              AAMIR AHMAD
            </span>
          </h1>
          <p className="text-xl">
            <span className="font-bold">Frontend Developer</span> based in
            Delhi, India
          </p>

          <a
            href="https://drive.google.com/file/d/1k2HeSdWSGQeYIUNXcw16bedTLw4D9Nml/view?usp=sharing"
            target="_blank"
            className="group relative inline-flex items-center gap-2 bg-black text-white font-semibold px-6 py-3 rounded-full shadow-md overflow-hidden transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
          >
            RESUME
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </span>
            <span className="absolute inset-0 bg-white opacity-10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></span>
          </a>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <Spline3D />
          </div>
        </div>
      </div>
    </div>
  );
}
