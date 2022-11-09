import axios from "axios";

const apiUrl = "http://localhost:5005"

class UserService {

    getToken(){
        return localStorage.getItem("authToken");
    }
    getUser(userId){
        return axios.get(apiUrl + "/perfil/" + userId);
    }
    deleteUser(userId){
        return axios.delete(apiUrl + "/perfil/" + userId, {headers:{authorization: `Bearer ${this.getToken()}`}})
    }
    editUser(user){
        return axios.put(apiUrl + "/perfil/" + user._id, user, {headers:{authorization: `Bearer ${this.getToken()}`}})
    }
    sendEmail(mailData){
        return axios.post(apiUrl + "/perfil/" + mailData)
    }
}

const userService = new UserService();
export default userService;