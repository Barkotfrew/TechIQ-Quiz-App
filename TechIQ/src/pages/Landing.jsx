import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-primary-aqua via-background-navy to-primary-aqua text-center p-8">
      {/* Main headline */}
      <h1 className="text-5xl font-bold text-white">
        Welcome to <span className="text-secondary-yellow">TechIQ</span>
      </h1>

      {/* Description */}
      <p className="text-text-light mt-4 max-w-xl">
        Test your tech knowledge, learn new skills, and track your progress in a fun, interactive way.
        For Ethiopian, By Ethiopian.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        {/* Start Quiz button */}
        <Link
          to="/quiz"
          className="bg-accent-lime text-white px-6 py-3 rounded hover:bg-green-500 transition"
        >
          Start Quiz
        </Link>

        {/* About / Learn More button */}
        <Link
          to="/about"
          className="border border-white text-white px-6 py-3 rounded hover:bg-background-navy hover:text-primary-aqua transition"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Hero;