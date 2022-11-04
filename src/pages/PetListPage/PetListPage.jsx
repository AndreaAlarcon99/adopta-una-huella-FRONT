import { useEffect, useState } from "react";
import AnimalComponent from "../../components/Animals/AnimalComponent";
import animalService from "../../services/animal.service";

function PetListPage() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    animalService.getAnimals().then((results) => {
      setAnimals(results.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>ANIMALES EN ADOPCIÓN</h1>
      <div className="row justify-content-center">
        {animals.map((animal) => (
          <AnimalComponent animal={animal} key={animal._id} />
        ))}
      </div>
    </div>
  );
}

export default PetListPage;
