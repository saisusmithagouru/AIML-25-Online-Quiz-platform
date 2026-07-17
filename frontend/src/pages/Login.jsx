import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import "../styles/Login.css";


function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(loginData);
localStorage.setItem("user", JSON.stringify(response.data));
localStorage.setItem("role", response.data.role);

console.log(response.data);
console.log(response.data.role);

if (response.data.role === "ADMIN") {
    navigate("/admin-dashboard");
} else {
    navigate("/dashboard");
}

    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message || "Invalid Email or Password");
      } else {
        alert("Unable to connect to the server.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-left">

          <div className="overlay">

    <span className="badge">
        🚀 Smart Learning Platform
    </span>

    <h1>QuizMaster</h1>

    <h2>
        Welcome Back!
    </h2>

    <p>
        Learn faster with interactive quizzes, real-time score tracking,
        detailed analytics, and exciting challenges.
    </p>

    <div className="login-features">

    <div className="feature">
            ✅ Instant Results
        </div>

        <div className="feature">
            📈 Track Performance
        </div>

        <div className="feature">
            🏆 Earn High Scores
        </div>

    </div>

</div>

        </div>

        <div className="login-right">

          <h2>Sign In</h2>

          <p className="subtitle">
            Login to access your dashboard
          </p>

          <form onSubmit={handleSubmit}>

    <label>Email Address</label>

    <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={loginData.email}
        onChange={handleChange}
        required
    />

    <label>Password</label>

    <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={loginData.password}
        onChange={handleChange}
        required
    />

    <button type="submit">
        Login →
    </button>

</form>

          <p className="register-text">
            Don't have an account?
            <Link to="/register"> Register Now</Link>
          </p>

        </div>

      </div>
    </div>
);
}

export default Login;