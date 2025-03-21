import React, { useState } from "react";
import logo from "../../assets/Aamir_vectorrr.png";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu(!menu);

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between text-white px-10 pt-6 md:px-20 relative z-30">
        {/* Logo */}
        <span>
          <img className="w-20 h-20 " src={logo} alt="Logo" />
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-xl font-semibold">
          {["About", "Education", "Projects", "Technical Skills"].map(
            (item, index) => (
              <li
                key={index}
                className="relative cursor-pointer after:content-[''] after:absolute after:w-0 after:h-1 after:bg-yellow-500 after:left-0 after:bottom-[-6px] after:transition-all after:duration-300 hover:after:w-full"
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
          <button className="bg-[#fb982f] hover:bg-[#fdc50f] text-white text-xl font-bold py-2 px-6 rounded-full shadow-[0_10px_20px_rgba(253,197,15,0.7)] transition-all duration-300 hover:scale-105">
            Button
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden absolute right-6 top-6 z-40">
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

        {/* Mobile Menu Overlay */}
        {menu && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-30 flex flex-col items-center justify-center gap-6 text-white text-2xl font-semibold transition-all duration-300">
            {["About", "Education", "Projects", "Technical Skills"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              )
            )}

            <button className="mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xl font-bold py-2 px-8 rounded-full shadow-lg hover:scale-110 transition-all duration-300">
              Button
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
