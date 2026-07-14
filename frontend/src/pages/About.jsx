import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css";

function About() {
  return (
    <>
      <Navbar />

      <div className="about-container">

        <div className="hero">

          <h1>About QuizMaster</h1>

          <p>
            QuizMaster is an Online Quiz Platform developed to help students
            improve their knowledge through interactive quizzes, instant
            evaluation, and performance tracking.
          </p>

        </div>

        <div className="features">

          <div className="feature-card">
            <h2>📚 Interactive Quizzes</h2>
            <p>
              Practice quizzes from Java, Python, Database, AI & ML and more.
            </p>
          </div>

          <div className="feature-card">
            <h2>⚡ Instant Results</h2>
            <p>
              Get your score immediately after submitting the quiz.
            </p>
          </div>

          <div className="feature-card">
            <h2>📈 Performance Tracking</h2>
            <p>
              Analyze your strengths and improve weak areas.
            </p>
          </div>

        </div>

        <div className="tech">

          <h2>Technologies Used</h2>

          <div className="tech-grid">

            <div>⚛ React</div>

            <div>☕ Spring Boot</div>

            <div>🛢 MySQL</div>

            <div>🌐 REST API</div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default About;