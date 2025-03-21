import React from "react";
import Me from "../../assets/Aamir Nobg.png";

const Home = () => {
  return (
    <div
      className="text-white w-full p-10 md:p-20"
      style={{
        background: "linear-gradient(90deg, rgba(34,3,34,1) 26%, rgba(64,2,64,1) 68%)",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left: Text */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tighter">
            Hello, I am Aamir
          </h1>
          <p className="text-sm md:text-2xl mt-4 tracking-tight">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero aperiam quisquam rerum itaque reiciendis ipsum.
          </p>
          <button className="mt-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xl font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(255,165,0,0.5)] hover:from-orange-500 hover:to-yellow-400">
            Contact Me
          </button>
        </div>

        {/* Right: Image with Blobs */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <div className="absolute w-72 h-72 bg-blue-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-80 z-0" />
          <div className="absolute w-72 h-72 bg-yellow-400 rounded-[8vw] top-1/2 left-[45%] transform -translate-x-1/2 -translate-y-1/2 rotate-45 blur-2xl opacity-80 z-0" />
          {/* Image */}
          <img
            src={Me}
            alt="My Photo"
            className="relative z-10 w-72 md:w-96 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
