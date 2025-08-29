import React from "react";

function About() {
  return (
    <div className="p-10 max-w-4xl mx-auto space-y-8 text-center">
      <h2 className="text-4xl font-bold text-primary-aqua">About TechIQ</h2>

      <p className="text-text-dark text-lg">
        Welcome to <span className="font-semibold">TechIQ</span> – the quiz app that turns learning technology into a fun and interactive adventure! Whether you are exploring computers for the first time or brushing up on gadgets, TechIQ guides you step by step with quizzes designed to challenge and inspire.
      </p>

      <p className="text-text-dark text-lg">
        Using TechIQ is simple. Choose a tech category that excites you, like Computers or Gadgets, and start answering multiple-choice questions at your own pace. The app gives instant feedback so you know which answers were correct and where you can improve. Every quiz is a small step towards mastering your tech skills.
      </p>

      <p className="text-text-dark text-lg">
        TechIQ isn’t just about testing your knowledge. It helps you learn by doing, motivates you with colorful visuals, and makes tracking your progress easy and rewarding. Over time, you can see how much you’ve improved and even challenge yourself to beat your previous scores.
      </p>

      <p className="text-text-dark text-lg">
        Behind the scenes, TechIQ is built with React for smooth interactivity, styled with Tailwind CSS for a modern and colorful interface, and powered by the Open Trivia DB to provide fresh and accurate quiz questions. Soon, we plan to add user accounts so you can save your progress, offer multiple languages, and even include a global leaderboard to compete with friends!
      </p>

      <p className="text-text-dark text-lg font-semibold">
        Jump in today and start your journey to become a TechIQ champion!
      </p>
    </div>
  );
}

export default About;
