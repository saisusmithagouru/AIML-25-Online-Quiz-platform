import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout, getUser } from "../services/authService";

function Navbar() {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-primary px-4">
      <h3 className="text-white">Online Quiz</h3>

      <div>
        <Link className="btn btn-light mx-2" to="/dashboard">
          Home
        </Link>

        <Link className="btn btn-light mx-2" to="/leaderboard">
          Leaderboard
        </Link>

        {user?.role === "ADMIN" && (
          <Link className="btn btn-warning mx-2" to="/admin">
            Admin
          </Link>
        )}

        <button
          className="btn btn-danger mx-2"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;