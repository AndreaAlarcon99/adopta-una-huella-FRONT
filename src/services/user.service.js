import axios from "axios";

const apiUrl = "http://localhost:5005";

class UserService {
  getToken() {
    return localStorage.getItem("authToken");
  }
  getUser(userId) {
    return axios.get(apiUrl + "/perfil/" + userId);
  }
  deleteUser(userId) {
    return axios.delete(apiUrl + "/peril/" + userId, {
      headers: { authorization: `Bearer ${this.getToken()}` },
    });
  }
  editUser(userId, user) {
    return axios.put(apiUrl + "/perfil/" + userId, user, {
      headers: { authorization: `Bearer ${this.getToken()}` },
    });
  }
  sendEmail(mailData) {
    return axios.post(apiUrl + "/perfil/" + mailData);
  }

}

const userService = new UserService();
export default userService;
