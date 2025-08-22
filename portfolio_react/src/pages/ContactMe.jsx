import React, { useState, useEffect } from "react";
import axios from "axios";
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://portfolio-main-7d511-default-rtdb.firebaseio.com/mesasges.json", 
        formData
      );
      // database built in another account.
      console.log("Firebase response:", res.data); // Log response
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Failed to send message. Check console for error.");
      console.error("Submit error:", err); // Better error info
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 p-3 sm:p-4 md:p-6 h-screen bg-white overflow-hidden">
      {/* Left Side */}
             <div className="w-full max-w-sm lg:max-w-md text-black space-y-3 sm:space-y-4 text-center lg:text-left">
        <p className="text-xs sm:text-sm font-semibold text-gray-500">CONTACT</p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">REACH OUT TO ME</h2>
                 <p className="text-gray-600 text-xs sm:text-sm">
           Got a project in mind or just want to say hi? I'm always up for a good chat.
         </p>
                 <div className="space-y-1">
           <p className="text-sm sm:text-base md:text-lg font-bold">+91 70 65 25 26 43</p>
           <p className="text-gray-700 text-xs sm:text-sm">aamir557ahmad@gmail.com</p>
         </div>
                 <div className="flex gap-4 text-black text-sm sm:text-base justify-center lg:justify-start">
          <a href="https://github.com/Aamir-786687" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
            <Github size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://www.linkedin.com/in/ah-aamir/" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
            <Linkedin size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </a>
          
        </div>
      </div>

             <h1 className="text-lg sm:text-xl font-bold hidden lg:block">OR</h1>

      {/* Right Side - Form */}
             <form
         onSubmit={handleSubmit}
         className="w-full max-w-sm lg:max-w-md bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-3 sm:p-4 md:p-6 rounded-xl shadow-lg text-white"
       >
                 <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">ANY PROJECT?</h3>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mb-2 p-2 rounded-md bg-white bg-opacity-20 text-black placeholder-black outline-none text-sm"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-2 p-2 rounded-md bg-white bg-opacity-20 text-black placeholder-black outline-none text-sm"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="2"
          required
          className="w-full mb-2 p-2 rounded-md bg-white bg-opacity-20 text-black placeholder-black outline-none resize-none text-sm"
        ></textarea>

                 <button
           type="submit"
           className="w-full sm:w-auto bg-black text-white px-3 sm:px-4 py-2 rounded-full font-semibold flex items-center justify-center gap-2 group transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
         >
          SUBMIT NOW
          <span className="transform transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight />
          </span>
        </button> 
      </form>
    </div>
  );
};

export default ContactMe;
