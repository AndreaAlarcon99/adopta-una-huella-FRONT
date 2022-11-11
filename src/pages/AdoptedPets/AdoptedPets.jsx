import animalService from "../../services/animal.service";
import AnimalComponent from "../../components/Animals/AnimalComponent";
import { useEffect, useState } from "react";
import "./AdoptedPets.css";

function AdoptedPets() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    animalService.getAdoptedAnimals().then((response) => {
      setAnimals(response.data);
    });
  }, []);

  return (
    <div>
      <h1>ANIMALES QUE HAN SIDO ADOPTADOS</h1>
      <p id="resultados"> {animals.length} animales han sido adoptados</p>
      <div className="container">
        <div className="row justify-content-center">
          {animals.map((animal) => (
            <AnimalComponent animal={animal} key={animal._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdoptedPets;
