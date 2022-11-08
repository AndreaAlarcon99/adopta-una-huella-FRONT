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
  editUser(user) {
    return axios.put(apiUrl + "/perfil/" + user._id, user, {
      headers: { authorization: `Bearer ${this.getToken()}` },
    });
  }

  getAnimals(animalId) {
    return axios.get(apiUrl + "/perfil/" + animalId);
  }

}

const userService = new UserService();
export default userService;
