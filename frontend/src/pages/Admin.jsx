import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  getAllQuestions,
  addQuestion,
  deleteQuestion,
} from "../services/quizService";
import "../styles/Admin.css";

function Admin() {
  const emptyQuestion = {
    questionTitle: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    rightAnswer: "",
    difficultyLevel: "",
    category: "",
  };

  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState(emptyQuestion);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const response = await getAllQuestions();
      setQuestions(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      await addQuestion(question);
      alert("Question Added Successfully");
      setQuestion(emptyQuestion);
      loadQuestions();
    } catch (err) {
      console.error(err);
      alert("Failed to add question");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this question?")) {
      await deleteQuestion(id);
      loadQuestions();
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>

      <form onSubmit={handleAdd} className="admin-form">
        <input
          name="questionTitle"
          placeholder="Question"
          value={question.questionTitle}
          onChange={handleChange}
          required
        />

        <input
          name="option1"
          placeholder="Option 1"
          value={question.option1}
          onChange={handleChange}
          required
        />

        <input
          name="option2"
          placeholder="Option 2"
          value={question.option2}
          onChange={handleChange}
          required
        />

        <input
          name="option3"
          placeholder="Option 3"
          value={question.option3}
          onChange={handleChange}
          required
        />

        <input
          name="option4"
          placeholder="Option 4"
          value={question.option4}
          onChange={handleChange}
          required
        />

        <input
          name="rightAnswer"
          placeholder="Right Answer"
          value={question.rightAnswer}
          onChange={handleChange}
          required
        />

        <input
          name="difficultyLevel"
          placeholder="Difficulty"
          value={question.difficultyLevel}
          onChange={handleChange}
          required
        />

        <input
          name="category"
          placeholder="Category"
          value={question.category}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Question</button>
      </form>

      <hr />

      <h2>Question List</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Question</th>
            <th>Category</th>
            <th>Difficulty</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {questions.map((q) => (
            <tr key={q.id}>
              <td>{q.id}</td>
              <td>{q.questionTitle}</td>
              <td>{q.category}</td>
              <td>{q.difficultyLevel}</td>
              <td>
                <button onClick={() => handleDelete(q.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;