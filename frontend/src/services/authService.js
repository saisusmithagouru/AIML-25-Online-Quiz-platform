import api from "./api";

export const registerUser = async (user) => {
  return await api.post("/users/register", user);
};

export const loginUser = async (user) => {
  return await api.post("/users/login", user);
};