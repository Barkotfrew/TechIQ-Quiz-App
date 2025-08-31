import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import QuizCategories from "./pages/QuizCategories";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import React from "react";

// Optional Error Boundary to catch any crash
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1 className="text-red-600 p-4">Something went wrong. Please refresh.</h1>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col bg-neutral-light">
          {/* Navbar */}
          <Navbar />

          {/* Main content */}
          <main className="flex-grow p-4">
            <Routes>
              {/* Landing page */}
              <Route path="/" element={<Landing />} />

              {/* Quiz categories */}
              <Route path="/quiz" element={<QuizCategories />} />

              {/* Quiz questions (dynamic) */}
              <Route path="/quiz/:categoryId" element={<Quiz />} />

              {/* About page */}
              <Route path="/about" element={<About />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
