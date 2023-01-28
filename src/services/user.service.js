import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3001/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const checkUser = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const checkMod = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const checkAdmin = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  checkUser,
  checkMod,
  checkAdmin,
};

export default UserService;
