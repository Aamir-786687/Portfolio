import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#220322] via-[#400240] to-[#400240] h-auto w-full overflow-hidden">
      <Navbar />
      <Home/>
    </div>
  );
};

export default App;
