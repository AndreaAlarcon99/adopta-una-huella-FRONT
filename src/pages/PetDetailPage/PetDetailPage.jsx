import { useEffect, useState } from "react";
import animalService from "../../services/animal.service";
import { useParams } from "react-router-dom";
import "./PetDetailPage.css";

function PetDetailPage() {

  const [animal, setAnimal] = useState("");
  const {animalId} = useParams();
  console.log("soy animal Id.. ", animalId)

  useEffect(() => {
    animalService.getAnimal(animalId)
    .then((result) => {
        console.log(animalId, result)
      setAnimal(result.data);
    });
    // eslint-disable-next-line
  }, []);


  return (
    <div className="container-fluid mt-5 p-0 w-100">
      <div className="row">
        <div className="col-10 col-md-6 p-0 m-auto">
          <img
            className="img-fluid  w-100 w-md-75 imagenAnimal shadow-lg"
            src={animal.imgAnimal}
            alt={animal.animalName}
          />
        </div>

        <div className="col-12 col-md-6 text-start m-5 m-md-0 text-center text-md-start">
          <div className="row">
            <div className="col-10 col-md-6">
              <p>
                <strong>Nombre: </strong>
                {animal.animalName}
              </p>

              <p>
                <strong>Sexo: </strong>
                {animal.gender}
              </p>
              <p className="card-text">
                <strong>Fecha de nacimiento: </strong>
                {animal.birthday}
              </p>
              <p className="card-text">
                <strong>Tamaño: </strong>
                {animal.size}
              </p>

              <p>
                <strong>Peso: </strong>
                {animal.weight} Kg
              </p>
              <p>
                <strong>Etapa: </strong>
                {animal.age}
              </p>
            </div>

            <div className="col-10 col-md-6">
              <p>
                <strong>Animal: </strong>
                {animal.animalType}
              </p>
              <p>
                <strong>Castrado: </strong>
                {animal.castrated === true ? "Sí" : "No"}
              </p>
              <p>
                <strong>Vacunado: </strong>
                {animal.vaccines === true ? "Sí" : "No"}
              </p>
              <p>
                <strong>Estilo de vida: </strong>
                {animal.lifestyle}
              </p>
              <p>
                <strong>Enfermedades: </strong>
                {animal.illness === true ? "Sí" : "No"}
              </p>
              <p>
                <strong>Microchip: </strong>
                {animal.microchip === true ? "Sí" : "No"}
              </p>
              <p>
                <strong>Protectora: </strong>
                {animal.creator}
              </p>
            </div>

            <p className="text-start">
              <strong>Descripción: </strong> <br></br>
              {animal.description}
            </p>
            <button
              className="btn text-white w-25 mx-auto botonAdoptar shadow-lg"
              type="submit"
            >
              Adoptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetDetailPage;