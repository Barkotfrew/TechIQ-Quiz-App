import React from "react";
import { Link } from "react-router-dom";

function QuizCategories() {
  const categories = [
    {
      id: 18,
      name: "Computers",
      description: "Test your knowledge of computer hardware, software, and history",
      color: "blue"
    },
    {
      id: 30,
      name: "Gadgets",
      description: "How well do you know modern gadgets and technology?",
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Tech<span className="text-green-600">IQ</span> Categories
        </h1>
        <p className="text-xl text-center text-gray-700 mb-12">
          Choose a category to test your tech knowledge
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/quiz/${category.id}`}
              className={`block bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-${category.color}-500`}
            >
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-4">{category.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
              </div>
              <p className="text-gray-700 mb-4">{category.description}</p>
              <div className={`text-${category.color}-600 font-semibold`}>
                Start Quiz →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuizCategories;