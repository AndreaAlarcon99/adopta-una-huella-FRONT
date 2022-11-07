import axios from "axios";
// import User from "../../../adopta-una-huella-BACK/models/User.model";

const apiUrl = process.env.API_SERVER_URL || "http://localhost:5005"

class AnimalService {

    getToken(){
        return localStorage.getItem("authToken");
    }
    getAnimals(){
        return axios.get(apiUrl + "/animales");
    }
    getAdoptedAnimals(){
        return axios.get(apiUrl + "/animalesAdoptados")
    }
    getAnimal(animalId){
        return axios.get(apiUrl + "/animales/" + animalId)
    }
    addAnimal(animal){
        return axios.post(apiUrl + "/animales", animal, {headers:{authorization: `Bearer ${this.getToken()}`}})
    }
    deleteAnimal(animalId){
        return axios.delete(apiUrl + "/animales/" + animalId, {headers:{authorization: `Bearer ${this.getToken()}`}})
    }
    editAnimal(animal, animalId){
        console.log("soy animal desde axios ", animal)
        console.log("soy animalId desde axios ", animalId)
        return axios.put(apiUrl + "/animales/" + animalId, animal, {headers:{authorization: `Bearer ${this.getToken()}`}})
    }
    // getAnimals(creator){
    //     return axios.get(apiUrl + "/animales/" + creator);
    // }

    // editApartment_v2(apartment, apartmentId){
    //     return axios.put(apiUrl + "/" + apartmentId, apartment);
    // }

}

const animalService = new AnimalService();
export default animalService;
