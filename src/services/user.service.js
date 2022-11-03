import axios from "axios";

const apiUrl = "http://localhost:5005"

class UserService {

    getUser(userId){
        return axios.get(apiUrl + "/perfil/" + userId);
    }
    deleteUser(userId){
        return axios.delete(apiUrl + "/peril/" + userId)
    }
    editUser(user){
        return axios.put(apiUrl + "/perfil/" + user._id, user)
    }
}

const userService = new UserService();
export default userService;