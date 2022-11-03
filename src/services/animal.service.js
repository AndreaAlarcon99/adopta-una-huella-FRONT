import axios from "axios";

const apiUrl = "http://localhost:5005/api"

class AnimalService {

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
        return axios.post(apiUrl + "/animales", animal)
    }
    deleteAnimal(animalId){
        return axios.delete(apiUrl + "/animales/" + animalId)
    }
    editAnimal(animal){
        return axios.put(apiUrl + "/animales/" + animal._id, animal)
    }
}

const animalService = new AnimalService();
export default animalService;