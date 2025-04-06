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
    <div className="flex flex-col md:flex-row justify-center items-center gap-12 p-10 min-h-screen bg-white">
      {/* Left Side */}
      <div className="max-w-md text-black space-y-4">
        <p className="text-sm font-semibold text-gray-500">CONTACT</p>
        <h2 className="text-4xl font-bold">REACH OUT TO ME</h2>
        <p className="text-gray-600">
          Got a project in mind or just want to say hi? I'm always up for a good chat.
        </p>
        <div>
          <p className="text-xl font-bold">+91 70 65 25 26 43</p>
          <p className="text-gray-700">aamir557ahmad@gmail.com</p>
        </div>
        <div className="flex gap-4 text-black text-lg">
          <a href="https://github.com/" target="_blank" rel="noreferrer"><Github /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin /></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram /></a>
        </div>
      </div>

      <h1 className="text-2xl font-bold hidden md:block">OR</h1>

      {/* Right Side - Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-8 rounded-xl shadow-lg text-white"
      >
        <h3 className="text-2xl font-semibold mb-6">ANY PROJECT?</h3>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 rounded-md bg-white bg-opacity-20 text-black placeholder-black outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 rounded-md bg-white bg-opacity-20 text-black placeholder-black outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          className="w-full mb-6 p-3 rounded-md bg-white bg-opacity-20 text-black placeholder-black outline-none resize-none"
        ></textarea>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 group transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
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
