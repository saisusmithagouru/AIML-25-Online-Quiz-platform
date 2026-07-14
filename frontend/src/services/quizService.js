import api from "./api";

// Get all questions
export const getAllQuestions = async () => {
  return await api.get("/questions/all");
};

// Get questions by category
export const getQuestionsByCategory = async (category) => {
  return await api.get(`/questions/category/${category}`);
};

// Add question
export const addQuestion = async (question) => {
  return await api.post("/questions/add", question);
};

// Update question
export const updateQuestion = async (id, question) => {
  return await api.put(`/questions/update/${id}`, question);
};

// Delete question
export const deleteQuestion = async (id) => {
  return await api.delete(`/questions/delete/${id}`);
};