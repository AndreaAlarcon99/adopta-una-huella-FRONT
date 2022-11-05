import { useEffect, useState } from "react";
import animalService from "../../services/animal.service";
import { useParams } from "react-router-dom";

function PetDetailPage() {

  const [animal, setAnimal] = useState([]);
  const {animalId} = useParams();

  useEffect(() => {
    animalService.getAnimal(animalId)
    .then((result) => {
      setAnimal(result.data);
    });
  }, []);


  return (
    <div className="container mt-5">
        <div className="row">
          <div className="col-10 col-md-6">
          <strong>IMAGEN </strong>
            <img
              className="img-fluid m-auto w-25"
              src={animal.imgAnimal}
              alt={animal.animalName}
            />
          </div>
          
              <div className="col-10 col-md-6 text-start">
              <div className="row">
              <div className="col-10 col-md-6">
              <p><strong>Nombre: </strong>
               {animal.animalName}</p>
               
               <p><strong>Sexo: </strong>{animal.gender}</p>
               <p className="card-text">
                <strong>Fecha de nacimiento: </strong>
                {animal.birthday}
              </p>
              <p className="card-text"><strong>Tamaño: </strong>{animal.size}</p>

                <p className="text-start">
                <strong>Peso: </strong>
                  {animal.weight}
                </p>
                <p className="text-start">
                <strong>Etapa: </strong>
                  {animal.age}
                </p>
                
                </div>

                <div className="col-10 col-md-6">
                <p className="text-start">
                <strong>Animal: </strong>
                  {animal.animalType}
                </p>
                <p className="text-start">
                <strong>Castrado: </strong>
                  {animal.castrated}
                </p>
                <p className="text-start">
                <strong>Vacunado: </strong>
                  {animal.vaccines}
                </p>
                <p className="text-start">
                <strong>Estilo de vida: </strong>
                  {animal.lifestyle}
                </p>
                <p className="text-start">
                <strong>Enfermedades: </strong>
                  {animal.illness}
                </p>
                <p className="text-start">
                <strong>Microchip: </strong>
                  {animal.microchip}
                </p>
               
                </div>
              
              <p><strong>Descripción: </strong> {animal.description}</p>
              </div>
              </div>
        </div>
      </div>


    
  );
}

export default PetDetailPage;