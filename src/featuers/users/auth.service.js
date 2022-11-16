import axios from "axios";

const API_URL = "http://localhost:5000/users";

const register = (formData) => {
  return axios.post(`${API_URL}/register`, formData);
};

const login = (formData) => {
  return axios.post(`${API_URL}/login`, formData).then((response) => {
    if (response.data.token) {
      localStorage.setItem("profile", JSON.stringify(response.data));
    }
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("profile");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
