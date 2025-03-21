import React from "react";

const Home = () => {
  return (
    <>
      <div className="text-white w-full justify-between items-start p-10 md:p-20 ">
        <div className="md:w-2/4 md:pt-10">
          <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
            Hello, I am Aamir
          </h1>
          <p className="text-sm md:text-2xl tracking-tight">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            aperiam quisquam rerum itaque reiciendis ipsum.
          </p>
          <button className="mt-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xl font-bold py-2 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(255,165,0,0.5)] hover:from-orange-500 hover:to-yellow-400">
  Contact Me
</button>

        </div>
      </div>
    </>
  );
};

export default Home;
