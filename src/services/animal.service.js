import axios from "axios";

const apiUrl = process.env.REACT_APP_API_SERVER_URL || "http://localhost:8080";

class AnimalService {
  getToken() {
    return localStorage.getItem("authToken");
  }
  getOldAnimals() {
    return axios.get(apiUrl);
  }
  getAnimals(animals) {
    return axios.get(apiUrl + "/animales", { params: animals });
  }
  getAdoptedAnimals() {
    return axios.get(apiUrl + "/animalesAdoptados");
  }
  getAnimal(animalId) {
    return axios.get(apiUrl + "/animales/" + animalId);
  }
  addAnimal(animal) {
    return axios.post(apiUrl + "/animales", animal, {
      headers: { authorization: `Bearer ${this.getToken()}` },
    });
  }
  deleteAnimal(animalId) {
    return axios.delete(apiUrl + "/animales/" + animalId, {
      headers: { authorization: `Bearer ${this.getToken()}` },
    });
  }
  editAnimal(animal, animalId) {
    return axios.put(apiUrl + "/animales/" + animalId, animal, {
      headers: { authorization: `Bearer ${this.getToken()}` },
    });
  }
}

const animalService = new AnimalService();
export default animalService;
