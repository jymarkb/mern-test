import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-800 to-gray-900 text-white flex items-center justify-center">
      <div className="text-center p-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
          Welcome to My Awesome App 🚀
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-90">
          Deployed using{" "}
          <span className="font-semibold text-blue-200">Vercel</span> &{" "}
          <span className="font-semibold text-indigo-300">Render</span> —
          fullstack and lightning fast.
        </p>
        <Link
          to="/login"
          className="inline-block px-10 py-4 text-lg font-semibold bg-white text-blue-700 rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-300"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
