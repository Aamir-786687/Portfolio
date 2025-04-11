import Sidebar from "../components/Sidebar";
import { ArrowRight } from "lucide-react";
import Spline3D from "../components/Spline3D";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white relative">
      <Sidebar />

      <div className="w-full md:ml-[140px] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-10 md:py-20">
        {/* Left Section */}
        <div className="max-w-xl space-y-4 md:space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight font-['Playfair_Display'] tracking-tight">
            MY NAME IS <br />
            <span className="text-pink-500 hover:text-black transition-colors duration-400 cursor-pointer">
              AAMIR AHMAD
            </span>
          </h1>
          <p className="text-lg md:text-xl font-['Poppins']">
            <span className="font-bold">Frontend Developer</span> based in
            Delhi, India
          </p>

          <a
            href="https://drive.google.com/file/d/1C9nekTkfdEviz4ZyXU4In6qM-l813kHF/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2 bg-black text-white font-semibold px-6 py-3 rounded-full shadow-md overflow-hidden transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
          >
            RESUME
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </span>
            <span className="absolute inset-0 bg-white opacity-10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></span>
          </a>
        </div>

        {/* Right Section */}
        <div className="w-full mt-8 md:mt-0 flex justify-center items-center">
          <div className="w-[80%] max-w-[500px] sm:max-w-[600px] aspect-[3/4] sm:aspect-[5/4]">
            <Spline3D />
          </div>
        </div>
      </div>
    </div>
  );
}
