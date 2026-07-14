import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "STUDENT",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser(user);

      alert("Registration Successful!");

      console.log(response.data);

      // Clear form
      setUser({
        name: "",
        email: "",
        password: "",
        role: "STUDENT",
      });

      // Redirect to Login page
      navigate("/login");

    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message || "Registration Failed!");
      } else {
        alert("Unable to connect to the server.");
      }
    }
  };

  return (
  <div className="register-container">

    <div className="register-card">

      <div className="register-left">

        <span className="badge">
          🚀 Join QuizMaster
        </span>

        <h1>Create Your Account</h1>

        <p>
          Join thousands of students who are improving their knowledge through
          interactive quizzes and performance tracking.
        </p>

        <div className="register-features">

          <div className="register-feature">
            📚 Unlimited Quizzes
          </div>

          <div className="register-feature">
            🏆 Leaderboards
          </div>

          <div className="register-feature">
            📈 Performance Analytics
          </div>

        </div>

      </div>

      <div className="register-right">

        <h2>Create Account</h2>

        <p className="subtitle">
          Fill in your details to get started
        </p>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={user.name}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <label>Role</label>

          <select
            name="role"
            value={user.role}
            onChange={handleChange}
          >
            <option value="STUDENT">Student</option>
            <option value="ADMIN">Admin</option>
          </select>

          <button type="submit">
            Create Account
          </button>

        </form>

        <p className="register-link">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>

  </div>
);
}

export default Register;