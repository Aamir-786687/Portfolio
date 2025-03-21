import React from "react";
import Me from "../../assets/Aamir Nobg.png";
import yellow from '../../assets/blob.svg'
import blue from '../../assets/blue.svg'

const Home = () => {
  return (
    <div
      className="text-white w-full p-10 md:p-20"
      style={{
        background:
          "linear-gradient(90deg, rgba(34,3,34,1) 26%, rgba(64,2,64,1) 68%)",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left: Text */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tighter">
            Hello, I am Aamir
          </h1>
          <p className="text-sm md:text-2xl mt-4 tracking-tight">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            aperiam quisquam rerum itaque reiciendis ipsum.
          </p>
          <button className="mt-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xl font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(255,165,0,0.5)] hover:from-orange-500 hover:to-yellow-400">
            Contact Me
          </button>
        </div>

        {/* Right: Image with SVG Blobs */}
        <div className="relative w-full flex justify-center items-center">
          {/* Yellow Blob */}
          <svg
            className="absolute w-72 md:w-96 z-0 top-1/2 left-1/2 transform -translate-x-[60%] -translate-y-1/2"
            viewBox="0 0 200 200"
            xmlns={yellow}
          >
            <path
              fill="#FACC15"
              d="M44.8,-72.9C57.3,-66.6,66.9,-57.3,73.6,-45.9C80.2,-34.4,84,-20.7,83.2,-7.2C82.4,6.2,77.1,19.4,69.2,30.4C61.2,41.5,50.7,50.3,39,56.2C27.4,62.1,13.7,65.2,0.1,65C-13.5,64.8,-27,61.3,-39.6,55.3C-52.2,49.2,-63.8,40.6,-71.6,29.2C-79.4,17.8,-83.5,3.6,-80.5,-10.1C-77.6,-23.7,-67.6,-36.8,-56.2,-44.9C-44.8,-53.1,-32.1,-56.4,-19.3,-62.4C-6.4,-68.4,6.6,-77.2,20.6,-80.2C34.6,-83.2,49.4,-80.1,44.8,-72.9Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Blue Blob */}
          <svg
            className="absolute w-72 md:w-96 z-0 top-1/2 left-1/2 transform -translate-x-[40%] -translate-y-1/2"
            viewBox="0 0 200 200"
            xmlns={blue}
          >
            <path
              fill="#3B82F6"
              d="M44.8,-72.9C57.3,-66.6,66.9,-57.3,73.6,-45.9C80.2,-34.4,84,-20.7,83.2,-7.2C82.4,6.2,77.1,19.4,69.2,30.4C61.2,41.5,50.7,50.3,39,56.2C27.4,62.1,13.7,65.2,0.1,65C-13.5,64.8,-27,61.3,-39.6,55.3C-52.2,49.2,-63.8,40.6,-71.6,29.2C-79.4,17.8,-83.5,3.6,-80.5,-10.1C-77.6,-23.7,-67.6,-36.8,-56.2,-44.9C-44.8,-53.1,-32.1,-56.4,-19.3,-62.4C-6.4,-68.4,6.6,-77.2,20.6,-80.2C34.6,-83.2,49.4,-80.1,44.8,-72.9Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Actual Image */}
          <img
            src={Me}
            alt="My Photo"
            className="relative z-10 w-72 md:w-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
