import axios from "axios";

// DEPLOY:
const apiUrl = process.env.REACT_APP_API_SERVER_URL || "http://localhost:8080";

// LOCAL:
// const apiUrl = "http://localhost:8080";

class AuthService {
  getToken() {
    return localStorage.getItem("authToken");
  }

  login(requestBody) {
    return axios.post(apiUrl + "/login", requestBody);
  }

  signup(requestBody) {
    return axios.post(apiUrl + "/signup", requestBody);
  }

  verify() {
    return axios.get(apiUrl + "/verify", {
      headers: { authorization: `Bearer ${this.getToken()}` },
    });
  }
}

// Create one instance (object) of the service
const authService = new AuthService();

export default authService;
