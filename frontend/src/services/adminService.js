import api from "./api";

export const getAdminDashboard = async () => {
  return await api.get("/admin/dashboard");
};