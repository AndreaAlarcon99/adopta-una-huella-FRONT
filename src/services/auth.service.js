import axios from "axios";

const apiUrl = "http://localhost:5005/"

class AuthService {
  constructor() {
    // this.api = axios.create({
    //   baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    // });

    // Automatically set JWT token on the request headers for every request
    apiUrl.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  login(requestBody){
    return axios.post(apiUrl + "/login", requestBody);
  }

  signup(requestBody){
    return axios.post(apiUrl + "/signup", requestBody)
  }

  verify(){
    return axios.post(apiUrl + "/verify")
  }
  
}

// Create one instance (object) of the service
const authService = new AuthService();

export default authService;


/* LO QUE VENÍA POR DEFECTO LO DEJO COMENTADO AQUÍ

login = (requestBody) => {
    return this.api.post("/auth/login", requestBody);
    // same as
    // return axios.post("http://localhost:5005/auth/login");
  };

  signup = (requestBody) => {
    return this.api.post("/auth/signup", requestBody);
    // same as
    // return axios.post("http://localhost:5005/auth/singup");
  };

  verify = () => {
    return this.api.get("/auth/verify");
    // same as
    // return axios.post("http://localhost:5005/auth/verify");
  };

*/
