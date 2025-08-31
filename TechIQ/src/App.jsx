import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Quiz() {
  const { categoryId } = useParams();
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      setLoading(true);
      setError(null);

      // Check if data is cached in localStorage
      const cachedData = localStorage.getItem(`quiz_${categoryId}`);
      if (cachedData) {
        setQuizData(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple`);
        if (!response.ok) {
          if (response.status === 429) throw new Error("Too many requests! Try again later.");
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setQuizData(data.results);

        // Cache the data in localStorage
        localStorage.setItem(`quiz_${categoryId}`, JSON.stringify(data.results));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [categoryId]);

  if (loading) return <p>Loading quiz...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div>
      {quizData.map((q, idx) => (
        <div key={idx}>
          <h2 dangerouslySetInnerHTML={{ __html: q.question }} />
          <ul>
            {[...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5).map((a, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: a }} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Quiz;
