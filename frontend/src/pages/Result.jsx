import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Result.css";

function Result() {

  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <>
        <Navbar />
        <div className="result-container">

          <div className="result-card">

            <h1>⚠️ No Result Found</h1>

            <button onClick={() => navigate("/dashboard")}>
              Back to Dashboard
            </button>

          </div>

        </div>

        <Footer />
      </>
    );
  }

  const { total, correct, wrong, percentage } = state;

  let performance = "";
  let emoji = "";

  if (percentage >= 90) {
    performance = "Outstanding";
    emoji = "🏆";
  } else if (percentage >= 75) {
    performance = "Excellent";
    emoji = "🎉";
  } else if (percentage >= 60) {
    performance = "Good Job";
    emoji = "👏";
  } else if (percentage >= 40) {
    performance = "Keep Practicing";
    emoji = "🙂";
  } else {
    performance = "Better Luck Next Time";
    emoji = "😔";
  }

  return (
    <>
      <Navbar />

      <div className="result-container">

        <div className="result-card">

          <div className="score-circle">
            {percentage}%
          </div>

          <h1>{emoji} Quiz Completed!</h1>

          <h2>{performance}</h2>

          <div className="stats">

            <div className="stat-box">
              <h3>{total}</h3>
              <p>Total</p>
            </div>

            <div className="stat-box">
              <h3>{correct}</h3>
              <p>Correct</p>
            </div>

            <div className="stat-box">
              <h3>{wrong}</h3>
              <p>Wrong</p>
            </div>

          </div>

          <div className="buttons">

            <button
              className="dashboard-btn"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </button>

            <button
              className="leaderboard-btn"
              onClick={() => navigate("/leaderboard")}
            >
              Leaderboard
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Result;