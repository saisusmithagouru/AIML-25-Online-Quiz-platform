import axios from "axios";

const API = "http://localhost:8080/results";

export const saveResult = (result) => {
    return axios.post(`${API}/save`, result);
};

export const getLeaderboard = () => {
    return axios.get(`${API}/leaderboard`);
};
export const getDashboardStats = (studentName) => {
    return axios.get(`${API}/dashboard/${studentName}`);
};