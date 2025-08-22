import { ArrowRight } from "lucide-react";
import Spline3D from "../components/Spline3D";

export default function Home() {
  return (
      <div className="w-full min-h-[80vh] flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 text-center lg:text-left">
        {/* Left Section */}
        <div className="w-full max-w-xl space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
            MY NAME IS <br />
            <span className="text-pink-500 hover:text-black transition-colors duration-400 cursor-pointer">
              AAMIR AHMAD
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
            <span className="font-bold">Full Stack Developer</span> based in
            Delhi, India
          </p>

          <a
            href="/Aamir_Ahmad_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2 bg-black text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md overflow-hidden transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 text-sm sm:text-base"
            onClick={(e) => {
              // Open in new tab
              window.open('/Aamir_Ahmad_Resume.pdf', '_blank');
              // Trigger download
              const link = document.createElement('a');
              link.href = '/Aamir_Ahmad_Resume.pdf';
              link.download = 'Aamir_Ahmad_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            RESUME
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </span>
            <span className="absolute inset-0 bg-white opacity-10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></span>
          </a>
        </div>

        {/* Right Section */}
        <div className="w-200px lg:w-200px flex justify-center items-center">
          <div className="w-[300px] h-[370px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[350px]">
            <Spline3D />
          </div>
        </div>

      </div>
  );
}
