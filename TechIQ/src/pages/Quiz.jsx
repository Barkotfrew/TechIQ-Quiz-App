import React from "react";

const categories = [
  { name: "Computers", color: "blue", id: 18 },
  { name: "Gadgets", color: "purple", id: 30 } // optional if you want a second tech category
];

const QuizCategories = ({ onSelectCategory }) => {
  return (
    <section className="bg-neutral-light py-12">
      <h2 className="text-text-dark text-3xl font-bold text-center mb-8">
        Choose a <span className="text-primary-aqua">Tech Category</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => onSelectCategory(cat.id)}
            className="bg-white p-6 rounded shadow-md w-64 text-center hover:shadow-xl transition cursor-pointer"
          >
            <div className={`bg-${cat.color}/20 p-4 rounded mb-4`}>
              <span className={`text-${cat.color} font-bold text-lg`}>{cat.name}</span>
            </div>
            <h3 className="text-text-dark font-semibold text-xl">{cat.name} Quiz</h3>
            <div className={`h-2 w-full bg-${cat.color} rounded mt-4`}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuizCategories;
