import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">TechIQ</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/quiz" className="hover:text-yellow-300">Quiz</Link>
        <Link to="/about" className="hover:text-yellow-300">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
