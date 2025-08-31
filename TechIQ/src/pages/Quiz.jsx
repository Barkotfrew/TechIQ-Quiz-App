import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Quiz() {
  const { categoryId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryName, setCategoryName] = useState("");

  const categoryMap = {
    18: "Computers",
    30: "Gadgets"
  };

  useEffect(() => {
    setCategoryName(categoryMap[categoryId] || "Tech");
    fetchQuestions();
  }, [categoryId]);

  const fetchQuestions = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple&encode=url3986`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.response_code !== 0 || !data.results || data.results.length === 0) {
        throw new Error('No questions available for this category');
      }
      
      // Decode URL-encoded questions and answers
      const processedQuestions = data.results.map(question => ({
        ...question,
        question: decodeURIComponent(question.question),
        correct_answer: decodeURIComponent(question.correct_answer),
        incorrect_answers: question.incorrect_answers.map(answer => 
          decodeURIComponent(answer)
        )
      }));
      
      setQuestions(processedQuestions);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching questions:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const shuffleAnswers = (question) => {
    if (!question) return [];
    const answers = [
      ...question.incorrect_answers,
      question.correct_answer
    ];
    return answers.sort(() => Math.random() - 0.5);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    fetchQuestions();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mb-4"></div>
          <p className="text-gray-600">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Quiz</h2>
          <p className="text-gray-700 mb-6">{error}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={fetchQuestions}
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Try Again
            </button>
            <Link
              to="/quiz"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition-colors text-center"
            >
              Choose Another Category
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/quiz"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            ← Back to Categories
          </Link>
          <div className="text-sm font-medium text-gray-500">
            Question {currentQuestion + 1}/{questions.length}
          </div>
        </div>

        {/* Quiz Content */}
        {!showScore ? (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {categoryName} Quiz
            </h2>
            <div className="h-2 bg-gray-200 rounded-full mb-6">
              <div 
                className="h-full bg-green-500 rounded-full" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            <h3 className="text-lg font-medium text-gray-800 mb-6 p-4 bg-gray-50 rounded-lg">
              {questions[currentQuestion].question}
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {shuffleAnswers(questions[currentQuestion]).map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(answer)}
                  className="bg-white border border-gray-200 hover:border-green-300 hover:bg-green-50 text-gray-800 font-medium py-3 px-4 rounded-lg transition-all duration-200 text-left"
                >
                  {answer}
                </button>
              ))}
            </div>

            <div className="mt-6 text-right text-sm text-gray-500">
              Score: {score}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">
              {score === questions.length ? "🎉" : score >= questions.length/2 ? "👍" : "📚"}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Completed!</h2>
            <p className="text-gray-700 mb-2">
              You scored {score} out of {questions.length} in the {categoryName} category
            </p>
            <div className="text-3xl font-bold text-green-600 mb-6">
              {Math.round((score / questions.length) * 100)}%
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={restartQuiz}
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Try Again
              </button>
              <Link
                to="/quiz"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition-colors text-center"
              >
                Choose Another Category
              </Link>
              <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors text-center"
              >
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;