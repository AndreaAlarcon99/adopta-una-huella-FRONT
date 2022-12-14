import animalService from "../../services/animal.service";
import AnimalComponent from "../../components/Animals/AnimalComponent";
import { useEffect, useState } from "react";
import "./AdoptedPets.css";
import Loading from "../../components/Loading/Loading";


function AdoptedPets() {
  const [animals, setAnimals] = useState([]);

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    animalService.getAdoptedAnimals().then((response) => {
      setAnimals(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Animales que han sido adoptados</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
      <p id="resultados"> {animals.length} animales han sido adoptados</p>
      <div className="container">
        <div className="row justify-content-center">
          {animals.map((animal) => (
            <AnimalComponent animal={animal} key={animal._id} />
          ))}
        </div>
      </div>
      </>)}
    </div>
  );
}

export default AdoptedPets;
