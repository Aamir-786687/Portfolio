import React from "react";
import logo from "../../assets/AAMIR.jpeg";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-wrap mb-8 justify-between md:items-center text-white px-10 pt-6 md:px-20">
        <span className="">
          <img className="w-40 h-13" src={logo} alt="Logo" />
        </span>
        
        <ul className="mx-24 py-2 mt-4 text-2xl font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-10">
  {["About", "Education", "Projects", "Technical Skills"].map((item, index) => (
    <li
      key={index}
      className="relative cursor-pointer after:content-[''] after:absolute after:w-0 after:h-1 after:bg-yellow-500 after:left-0 after:bottom-[-40px] after:transition-all after:duration-300 hover:after:w-full"
    >
      <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>{item}</a>
    </li>
  ))}
</ul>


        <button class="bg-[#fb982f] hover:bg-[#fdc50f] cursor-pointer text-white text-xl font-bold py-2 px-6 rounded-full shadow-[0_10px_20px_rgba(253,197,15,0.7)]">
          Button
        </button>
      </nav>
    </>
  );
};

export default Navbar;
