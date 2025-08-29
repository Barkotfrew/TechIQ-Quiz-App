import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between items-center p-4 shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="TechIQ Logo" className="w-10 h-10 mr-2"/>
        <h1 className="text-text-dark font-bold text-xl">TechIQ</h1>
      </div>
      <div className="space-x-4">
        <Link to="/" className="text-text-dark hover:text-primary-aqua transition">Home</Link>
        <Link to="/about" className="text-text-dark hover:text-primary-aqua transition">About</Link>
        <Link 
          to="/quiz"
          className="bg-accent-lime text-white px-4 py-2 rounded hover:bg-green-500 transition"
        >
          Start Quiz
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
