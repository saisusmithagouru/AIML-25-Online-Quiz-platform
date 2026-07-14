import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  getAllQuestions,
  getQuestionsByCategory,
} from "../services/quizService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Quiz.css";
import { saveResult } from "../services/resultService";

function Quiz() {
  const navigate = useNavigate();
  const location = useLocation();

  const category = location.state?.category;

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      let response;

      if (category) {
        response = await getQuestionsByCategory(category);
      } else {
        response = await getAllQuestions();
      }

      setQuestions(response.data);
    } catch (error) {
      console.error("Error loading questions:", error);
      alert("Failed to load questions.");
    }
  };

  const handleOptionChange = (option) => {
    setAnswers({
      ...answers,
      [currentQuestion]: option,
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitQuiz = async () => {

    let correct = 0;

    questions.forEach((question, index) => {

        if (answers[index] === question.rightAnswer) {
            correct++;
        }

    });

    const total = questions.length;
    const wrong = total - correct;
    const percentage =
        total > 0 ? Math.round((correct / total) * 100) : 0;

    const user = JSON.parse(localStorage.getItem("user"));

    try {

        await saveResult({

            studentName: user.name,

            category: category || "General",

            totalQuestions: total,

            correctAnswers: correct,

            wrongAnswers: wrong,

            percentage: percentage

        });

    } catch (error) {

        console.error("Result Save Failed", error);

    }

    navigate("/completed", {
    state: {
        total,
        correct,
        wrong,
        percentage
    }
});
    

};

  if (questions.length === 0) {
  return (
    <>
      <Navbar />
      <div className="loading-container">
        <div className="loader"></div>
        <h2>Loading Quiz...</h2>
      </div>
      <Footer />
    </>
  );
}

  const question = questions[currentQuestion];

  return (
    <>
      <Navbar />

      <div className="quiz-container">

<div className="progress-bar">

<div
className="progress-fill"
style={{
width:`${((currentQuestion+1)/questions.length)*100}%`
}}
></div>

</div>

<div className="question-count">

Question {currentQuestion+1} of {questions.length}

</div>

<div className="question-card">

<h2>
{question.questionTitle}
</h2>

<div className="options">

{[
question.option1,
question.option2,
question.option3,
question.option4
].map((option,index)=>(

<label
key={index}
className={`option ${
answers[currentQuestion]===option?"selected":""
}`}
>

<input
type="radio"
name="option"
checked={answers[currentQuestion]===option}
onChange={()=>handleOptionChange(option)}
/>

{option}

</label>

))}

</div>

<div className="buttons">

<button
onClick={previousQuestion}
disabled={currentQuestion===0}
>
Previous
</button>

{currentQuestion===questions.length-1?

<button
className="submit-btn"
onClick={submitQuiz}
>
Submit Quiz
</button>

:

<button
onClick={nextQuestion}
>
Next
</button>

}

</div>

</div>

</div>

      <Footer />
    </>
  );
}

export default Quiz;