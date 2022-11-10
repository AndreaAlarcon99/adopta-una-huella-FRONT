import animalService from "../../services/animal.service";
import AnimalComponent from "../../components/Animals/AnimalComponent";
import { useEffect, useState } from "react";

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
      <div className="container" id="alinear">
        <div className="row">
          {animals.map((animal) => (
            <AnimalComponent animal={animal} key={animal._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdoptedPets;
