import { ArrowRight } from "lucide-react";
import Spline3D from "../components/Spline3D";

export default function Home() {
  return (
      <div className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-10 text-center">
        {/* Left Section */}
        <div className="max-w-xl space-y-4 md:space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            MY NAME IS <br />
            <span className="text-pink-500 hover:text-black transition-colors duration-400 cursor-pointer">
              AAMIR AHMAD
            </span>
          </h1>
          <p className="text-lg md:text-xl">
            <span className="font-bold">Full Stack Developer</span> based in
            Delhi, India
          </p>

          <a
            href="https://drive.google.com/drive/folders/1VfheNIDQbrg9q3NRxbhVWGzpsDk5ir0e?usp=drive_link"
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
        <div className="w-80% ml-20 mt-8 md:mt-0 flex justify-center items-center">
          <div className="w-[90%] h-50% sm:w-[80%] md:w-[500px] aspect-square sm:aspect-[5/4]">
            <Spline3D />
          </div>
        </div>

      </div>
  );
}
