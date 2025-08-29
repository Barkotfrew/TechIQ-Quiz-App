import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";   // ✅ import footer
import Landing from "./pages/Landing";
import Quiz from "./pages/Quiz";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Top navigation */}
        <Navbar />

        {/* Main content takes available space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Always at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
