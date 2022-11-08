import { useEffect, useState } from "react";
import animalService from "../../services/animal.service";
import { useParams } from "react-router-dom";
import "./PetDetailPage.css";
import { Link } from "react-router-dom";

function PetDetailPage() {
  const [animal, setAnimal] = useState("");
  const { animalId } = useParams();

  useEffect(() => {
    animalService.getAnimal(animalId).then((result) => {
      setAnimal(result.data);
    });
    // eslint-disable-next-line
  }, []);

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
            <Link to={"/animales/" + animal._id + "/editar"}>
              {" "}
              <img
                className="penEdit"
                src="../../penEdit.png"
                alt="editar"
              ></img>
            </Link>

            <h2 className="text-start m-3">{animal.animalName}</h2>
            {/* <p>
                <strong>Nombre: </strong>
                {animal.animalName}
              </p> */}
            <div className="col-10 col-md-6 ">
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
                {animal.castrated === true ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                )}
              </p>
              <p>
                <strong>Vacunado: </strong>
                {animal.vaccines === true ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                )}
              </p>

              <p>
                <strong>Microchip: </strong>
                {animal.microchip === true ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                )}
              </p>
            </div>

            <p className="text-start border">{animal.description}</p>
            <Link to={"/perfil/" + animal.creator}>
              <strong>Protectora </strong>
            </Link>

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
