import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // 👈 import your logo

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between items-center p-4 shadow-md">
      {/* Logo + Title */}
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="TechIQ Logo" className="h-10 w-auto" /> {/* 👈 logo */}
        <h1 className="text-text-dark font-bold text-xl">TechIQ</h1>
      </Link>

      {/* Navigation Links */}
      <div className="space-x-4">
        <Link
          to="/"
          className="text-text-dark hover:text-primary-aqua transition"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-text-dark hover:text-primary-aqua transition"
        >
          About
        </Link>
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
