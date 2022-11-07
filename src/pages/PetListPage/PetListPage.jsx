import { useEffect, useState } from "react";
import AnimalComponent from "../../components/Animals/AnimalComponent";
import AnimalFilters from "../../components/Animals/AnimalFilters";
import AnimalTypeFilter from "../../components/Animals/AnimalTypeFilter";
import animalService from "../../services/animal.service";
import "./PetListPage.css";

function PetListPage() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    animalService.getAnimals().then((results) => {
      setAnimals(results.data);
    });
  }, []);

  return (
    <div>
      <AnimalFilters />
      <h2 className="mb-3"> Animales en adopción </h2>
      <AnimalTypeFilter />
      <div className="col-8 col-md-6 col-lg-5">
        {animals.map((animal) => (
          <AnimalComponent animal={animal} key={animal._id} />
        ))}
      </div>
    </div>
  );
}

export default PetListPage;
