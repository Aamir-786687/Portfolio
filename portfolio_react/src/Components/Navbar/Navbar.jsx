import React, { useState } from "react";
import logo from "../../assets/Aamir_vectorrr.png";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openmenu] = useState(false);

  const toggleMenu = () => {
    openmenu(!menu);
  };

  return (
    <div className="border-b-[1px] border-yellow-500">
      <nav className="flex items-center justify-between text-white px-6 pt-6 md:px-20 relative z-30">
        {/* Logo */}
        <span>
          <img className="w-25 h-25 object-contain" src={logo} alt="Logo" />
        </span>

        {/* Hamburger Icon (Right Side) */}
        <div className="md:hidden z-50">
          {menu ? (
            <RiCloseLine
              size={30}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          ) : (
            <RiMenu2Line
              size={30}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          )}
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 text-xl font-semibold">
          {[ "About", "Education", "Projects", "Skills"].map(
            (item, index) => (
              <li
                key={index}
                className="relative text-2xl cursor-pointer after:content-[''] after:absolute after:w-0 after:h-[4px] after:bg-yellow-500 after:left-0 after:bottom-[-36px] after:transition-all after:duration-300 hover:after:w-full"
              >
                <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xl font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(255,165,0,0.5)] hover:from-orange-500 hover:to-yellow-400">
            Contact Me
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-[75%] bg-black bg-opacity-60 backdrop-blur-md z-40 p-10 transition-transform duration-300 transform ${
            menu ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <ul className="space-y-6 text-2xl font-semibold text-white text-center mt-10">
            {["Home", "About", "Education", "Projects", "Skills"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={toggleMenu}
                    className="hover:text-yellow-400 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
          <div className="mt-10 flex justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xl font-bold py-2 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(255,165,0,0.5)] hover:from-orange-500 hover:to-yellow-400">
              Contact Me
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
