import api from "./api";


// Get all quiz questions

export const getAllQuestions = () => {

    return api.get("/questions/all");

};




// Get questions by category (if backend supports it)

export const getQuestionsByCategory = (category) => {

    return api.get(
        `/questions/category/${category}`
    );

};




// Add new question (Admin)

export const addQuestion = (question) => {

    return api.post(
        "/questions/add",
        question
    );

};




// Update question (Admin)

export const updateQuestion = (id, question) => {

    return api.put(
        `/questions/${id}`,
        question
    );

};




// Delete question (Admin)

export const deleteQuestion = (id) => {

    return api.delete(
        `/questions/${id}`
    );

};




// Submit quiz result

export const submitQuizResult = (result) => {

    return api.post(
        "/results/add",
        result
    );

};




// Get leaderboard

export const getLeaderboard = () => {

    return api.get(
        "/results/leaderboard"
    );

};