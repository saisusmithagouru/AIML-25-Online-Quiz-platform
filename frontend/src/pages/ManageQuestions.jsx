import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  getAllQuestions,
  deleteQuestion,
  updateQuestion,
} from "../services/quizService";
import "../styles/ManageQuestions.css";

function ManageQuestions() {

  const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [editingQuestion, setEditingQuestion] = useState(null);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const response = await getAllQuestions();
      setQuestions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {

    if (window.confirm("Delete this question?")) {

      await deleteQuestion(id);

      loadQuestions();

    }

  };

  const handleEdit = (question) => {

    setEditingQuestion({ ...question });

  };

  const handleUpdate = async () => {

    try {

      await updateQuestion(editingQuestion.id, editingQuestion);

      alert("Question Updated Successfully ✅");

      setEditingQuestion(null);

      loadQuestions();

    } catch (error) {

      console.log(error);

      alert("Failed to Update Question");

    }

  };

  const filteredQuestions = questions.filter((q) => {

    const searchMatch =
      q.questionTitle.toLowerCase().includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || q.category === category;

    return searchMatch && categoryMatch;

  });

  return (

    <>

      <Navbar />

      <div className="manage-page">

        <h1>Manage Questions</h1>

        <p>
          Search, Edit and Delete Questions
        </p>

        <div className="filters">

          <input
            type="text"
            placeholder="Search Question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >

            <option>All</option>
            <option>Java</option>
            <option>Python</option>
            <option>Database</option>
            <option>AI & ML</option>

          </select>

        </div>

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

            {filteredQuestions.map((q) => (

              <tr key={q.id}>

                <td>{q.id}</td>

                <td>{q.questionTitle}</td>

                <td>

                  <span className="category">

                    {q.category}

                  </span>

                </td>

                <td>

                  <span className="difficulty">

                    {q.difficultyLevel}

                  </span>

                </td>

                <td>

                  <div className="action-buttons">

                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(q)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(q.id)}
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>
                {editingQuestion && (

          <div className="edit-popup">

            <div className="edit-card">

              <h2>Edit Question</h2>

              <input
                type="text"
                value={editingQuestion.questionTitle}
                onChange={(e) =>
                  setEditingQuestion({
                    ...editingQuestion,
                    questionTitle: e.target.value,
                  })
                }
              />

              <input
                type="text"
                value={editingQuestion.option1}
                onChange={(e) =>
                  setEditingQuestion({
                    ...editingQuestion,
                    option1: e.target.value,
                  })
                }
              />

              <input
                type="text"
                value={editingQuestion.option2}
                onChange={(e) =>
                  setEditingQuestion({
                    ...editingQuestion,
                    option2: e.target.value,
                  })
                }
              />

              <input
                type="text"
                value={editingQuestion.option3}
                onChange={(e) =>
                  setEditingQuestion({
                    ...editingQuestion,
                    option3: e.target.value,
                  })
                }
              />

              <input
                type="text"
                value={editingQuestion.option4}
                onChange={(e) =>
                  setEditingQuestion({
                    ...editingQuestion,
                    option4: e.target.value,
                  })
                }
              />

              <select
                value={editingQuestion.rightAnswer}
                onChange={(e) =>
                  setEditingQuestion({
                    ...editingQuestion,
                    rightAnswer: e.target.value,
                  })
                }
              >
                <option value={editingQuestion.option1}>
                  {editingQuestion.option1}
                </option>

                <option value={editingQuestion.option2}>
                  {editingQuestion.option2}
                </option>

                <option value={editingQuestion.option3}>
                  {editingQuestion.option3}
                </option>

                <option value={editingQuestion.option4}>
                  {editingQuestion.option4}
                </option>

              </select>

              <select
                value={editingQuestion.difficultyLevel}
                onChange={(e) =>
                  setEditingQuestion({
                    ...editingQuestion,
                    difficultyLevel: e.target.value,
                  })
                }
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>

              <div className="popup-buttons">

                <button
                  className="save-btn"
                  onClick={handleUpdate}
                >
                  Update Question
                </button>

                <button
                  className="cancel-btn"
                  onClick={() => setEditingQuestion(null)}
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>

        )}

      </div>

      <Footer />

    </>

  );

}

export default ManageQuestions;