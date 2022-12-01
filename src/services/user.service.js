import axios from "axios";

const apiUrl = process.env.REACT_APP_API_SERVER_URL || "http://localhost:8080";

class UserService {
  getToken() {
    return localStorage.getItem("authToken");
  }
  getUser(userId) {
    return axios.get(apiUrl + "/perfil/" + userId);
  }
  getUsers() {
    return axios.get(apiUrl + "/protectoras");
  }
  deleteUser(userId) {
    return axios.delete(apiUrl + "/perfil/" + userId, {
      headers: { authorization: `Bearer ${this.getToken()}` },
    });
  }
  editUser(user, userId) {
    return axios.put(apiUrl + "/perfil/" + userId, user, {
      headers: { authorization: `Bearer ${this.getToken()}` },
    });
  }
  sendEmail(mailData) {
    return axios.post(apiUrl + "/perfil/" + mailData.userId + "/send", mailData);
  }
}

const userService = new UserService();
export default userService;