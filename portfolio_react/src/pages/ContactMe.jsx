import React, { useState } from "react";
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
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 p-4 sm:p-6 md:p-10 min-h-screen bg-white">
      {/* Left Side */}
      <div className="max-w-md text-black space-y-4 text-center md:text-left">
        <p className="text-sm font-semibold text-gray-500 font-['Poppins']">CONTACT</p>
        <h2 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display']">REACH OUT TO ME</h2>
        <p className="text-gray-600 text-sm sm:text-base font-['Poppins']">
          Got a project in mind or just want to say hi? I'm always up for a good chat.
        </p>
        <div>
          <p className="text-lg sm:text-xl font-bold font-['Poppins']">+91 70 65 25 26 43</p>
          <p className="text-gray-700 text-sm sm:text-base font-['Poppins']">aamir557ahmad@gmail.com</p>
        </div>
        <div className="flex gap-4 text-black text-lg justify-center md:justify-start">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
            <Github />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
            <Linkedin />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
            <Instagram />
          </a>
        </div>
      </div>

      <h1 className="text-2xl font-bold hidden md:block font-['Playfair_Display']">OR</h1>

      {/* Right Side - Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-6 sm:p-8 rounded-xl shadow-lg text-white"
      >
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 font-['Playfair_Display']">ANY PROJECT?</h3>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mb-3 sm:mb-4 p-2 sm:p-3 rounded-md bg-white bg-opacity-20 text-black placeholder-black outline-none text-sm sm:text-base font-['Poppins']"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-3 sm:mb-4 p-2 sm:p-3 rounded-md bg-white bg-opacity-20 text-black placeholder-black outline-none text-sm sm:text-base font-['Poppins']"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
          className="w-full mb-4 sm:mb-6 p-2 sm:p-3 rounded-md bg-white bg-opacity-20 text-black placeholder-black outline-none resize-none text-sm sm:text-base font-['Poppins']"
        ></textarea>

        <button
          type="submit"
          className="w-full sm:w-auto bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold flex items-center justify-center gap-2 group transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 font-['Poppins']"
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
