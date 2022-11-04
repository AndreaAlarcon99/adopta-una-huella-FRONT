import axios from "axios";

const apiUrl = "http://localhost:5005"

class AuthService {

  getToken(){
    return localStorage.getItem("authToken");
  }

  login(requestBody){
    return axios.post(apiUrl + "/login", requestBody);
  }

  signup(requestBody){
    return axios.post(apiUrl + "/signup", requestBody)
  }

  verify(){
    return axios.post(apiUrl + "/verify", {headers:{authorization: `Bearer ${this.getToken()}`}})
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
