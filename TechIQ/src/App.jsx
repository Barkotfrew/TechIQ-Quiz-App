import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Quiz from "./pages/Quiz";
import About from "./pages/About";

function App() {
  return (
    <Router>
      {/* Root container: flex column to allow footer at the bottom */}
      <div className="min-h-screen flex flex-col bg-neutral-light">
        {/* Navigation bar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
