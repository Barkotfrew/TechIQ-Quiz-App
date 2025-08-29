import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-primary-aqua via-background-navy to-primary-aqua text-center p-8">
      <h1 className="text-5xl font-bold text-white">
        Welcome to <span className="text-secondary-yellow">TechIQ</span>
      </h1>
      <p className="text-text-light mt-4 max-w-xl">
        Test your knowledge, learn new skills, and track your progress in a fun, interactive way.
      </p>
      <div className="mt-6 flex space-x-4">
        <Link
          to="/quiz"
          className="bg-accent-lime text-white px-6 py-3 rounded hover:bg-green-500 transition"
        >
          Start Now
        </Link>
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
