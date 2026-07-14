import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHome,
  FaThLarge,
  FaBookOpen,
  FaTrophy,
  FaInfoCircle,
  FaSignOutAlt,
  FaUserCircle,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("role");

  alert("Logged out successfully!");

  navigate("/");
};

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Link to="/" className="logo">
        🎓 QuizMaster
      </Link>

      <ul className="nav-links">

        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">
            <FaHome />
            Home
          </Link>
        </li>

        {/* STUDENT NAVBAR */}

{user && user.role === "STUDENT" && (
  <>
    <li className={location.pathname === "/dashboard" ? "active" : ""}>
      <Link to="/dashboard">
        <FaThLarge />
        Dashboard
      </Link>
    </li>

    <li className={location.pathname === "/quiz-categories" ? "active" : ""}>
      <Link to="/quiz-categories">
        <FaBookOpen />
        Quizzes
      </Link>
    </li>

    <li className={location.pathname === "/leaderboard" ? "active" : ""}>
      <Link to="/leaderboard">
        <FaTrophy />
        Leaderboard
      </Link>
    </li>
  </>
)}

{/* ADMIN NAVBAR */}

{user && user.role === "ADMIN" && (
  <>
    <li className={location.pathname === "/admin-dashboard" ? "active" : ""}>
      <Link to="/admin-dashboard">
        <FaThLarge />
        Admin Dashboard
      </Link>
    </li>

    <li className={location.pathname === "/manage-questions" ? "active" : ""}>
      <Link to="/manage-questions">
        <FaBookOpen />
        Manage Questions
      </Link>
    </li>

    <li className={location.pathname === "/leaderboard" ? "active" : ""}>
      <Link to="/leaderboard">
        <FaTrophy />
        Leaderboard
      </Link>
    </li>
  </>
)}

        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">
            <FaInfoCircle />
            About
          </Link>
        </li>

      </ul>

      <div className="nav-buttons">

        {!user ? (
          <>
            <Link to="/login">
              <button className="login-btn">
                <FaSignInAlt />
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="register-btn">
                <FaUserPlus />
                Register
              </button>
            </Link>
          </>
        ) : (
          <>
            <div className="user-box">
              <FaUserCircle className="user-icon" />
              <span>{user.name}</span>
            </div>

            <button className="logout-btn" onClick={logout}>
              <FaSignOutAlt />
              Logout
            </button>
          </>
        )}

      </div>
    </motion.nav>
  );
}

export default Navbar;