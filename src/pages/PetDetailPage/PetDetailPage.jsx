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
      setAnimal(result.data);
    });
    // eslint-disable-next-line
  }, []);
  console.log("patata ", animal.animalName)

  return (
    <div className="container-fluid mt-5 p-0 w-100">
      <div className="row">
        <div className="col-10 col-md-6 p-0 m-auto">
          <img
            className="img-fluid w-75 imagenAnimal shadow-lg"
            src={animal.imgAnimal}
            alt={animal.animalName}
          />
        </div>

        <div className="col-12 col-md-6 mt-md-5 text-start m-5 m-md-0 text-center text-md-start">
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
              <p>
                <strong>Estilo de vida: </strong>
                {animal.lifestyle}
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
              type="button"
              className="btn text-white w-25 mx-auto botonAdoptar"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@getbootstrap"
            >
              Adoptar
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Contacta con la protectora
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="recipient-name"
                          className="col-form-label"
                        >
                          Nombre:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="recipient-name"
                          className="col-form-label"
                        >
                          Teléfono:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="recipient-name"
                          className="col-form-label"
                        >
                          email:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="message-text"
                          className="col-form-label"
                        >
                          Mensaje:
                        </label>
                        <textarea
                          className="form-control"
                          id="message-text"
                          placeholder="Pregunta a la protectora..."
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn" id="btSend">
                      Enviar mensaje
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetDetailPage;