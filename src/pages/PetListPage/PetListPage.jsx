import { useEffect, useState } from "react";
import AnimalComponent from "../../components/Animals/AnimalComponent";
import AnimalFilters from "../../components/Animals/AnimalFilters";
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
      <div id="title">
        <h2 className="title"> Animales en adopción </h2>
        <h6 className="resultado">{animals.length} resultados encontrados</h6>
      </div>
      <div id="margin">
        <div className="container ">
          <div className="row justify-content-center ">
            {animals.map((animal) => (
              <AnimalComponent animal={animal} key={animal._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetListPage;
