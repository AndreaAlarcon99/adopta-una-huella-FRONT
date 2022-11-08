import { useEffect, useState } from "react";
import AnimalComponent from "../../components/Animals/AnimalComponent";
import AnimalFilters from "../../components/Animals/AnimalFilters";
import AnimalTypeFilter from "../../components/Animals/AnimalTypeFilter";
import animalService from "../../services/animal.service";
import "./PetListPage.css";

function PetListPage() {
  const [animals, setAnimals] = useState([]);

  const updateAnimals = (animals) => {
    setAnimals(animals);
  };

  useEffect(() => {
    animalService.getAnimals().then((results) => {
      setAnimals(results.data);
    });
  }, []);

  return (
    <div>
      <AnimalFilters updateAnimals={updateAnimals} />
      <h2 className="mb-3"> Animales en adopción </h2>
      <AnimalTypeFilter updateAnimals={updateAnimals} />
      <div className="container">
        <div className="row">
          {animals.map((animal) => (
            <AnimalComponent animal={animal} key={animal._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PetListPage;
