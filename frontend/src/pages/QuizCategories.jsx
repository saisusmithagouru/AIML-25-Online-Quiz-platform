import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/QuizCategories.css";

function QuizCategories() {
  const navigate = useNavigate();

  const quizzes = [
    {
      title: "Java",
      description: "Core Java Programming",
      category: "Java",
      icon: "☕",
    },
    {
      title: "Python",
      description: "Python Basics & Advanced",
      category: "Python",
      icon: "🐍",
    },
    {
      title: "Database",
      description: "SQL & Database Concepts",
      category: "Database",
      icon: "🗄️",
    },
    {
      title: "AI & ML",
      description: "Artificial Intelligence",
      category: "AI",
      icon: "🤖",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="quiz-page">

        <h1>Select a Quiz</h1>

        <p>Choose a category to start your assessment.</p>

        <div className="quiz-grid">

          {quizzes.map((quiz, index) => (

            <div className="quiz-card" key={index}>

              <div className="icon">
                {quiz.icon}
              </div>

              <h2>{quiz.title}</h2>

              <p>{quiz.description}</p>

              <button
                onClick={() =>
                  navigate("/quiz", {
                    state: {
                      category: quiz.category,
                    },
                  })
                }
              >
                Start Quiz
              </button>

            </div>

          ))}

        </div>

      </div>

      <Footer />
    </>
  );
}

export default QuizCategories;