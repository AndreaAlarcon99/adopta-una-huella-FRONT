import { useContext, useEffect, useState } from "react";

import animalService from "../../services/animal.service";
import { useParams } from "react-router-dom";
import "./PetDetailPage.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import userService from "../../services/user.service";

// import userService from "../../services/user.service";
// import Maps from "../../components/Maps/maps";

function PetDetailPage() {
  const [animal, setAnimal] = useState("");
  const { user, isLoggedIn } = useContext(AuthContext);
  const { animalId } = useParams();
  
  // USE EFFECT DE LETI QUE FUNCIONA BIEN!!!!!!!!!
  useEffect(() => {
    animalService.getAnimal(animalId).then((result) => {
      setAnimal(result.data);
      // console.log("result data aninal: ", result.data);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-fluid mt-5 p-0 w-100">
      {/* <Maps /> */}
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
            {isLoggedIn && (user.admin || user._id === animal.creator) && (
              <>
              <Link to={"/animales/" + animal._id + "/editar"}>
                {" "}
                <img
                  className="penEdit"
                  src="../../penEdit.png"
                  alt="editar"
                ></img>
              </Link>
              </>
            )}
            <h2 className="text-start m-3">{animal.animalName}</h2>
            <p className="text-start w-75" id="description">
              {animal.description}
            </p>

            <div className="col-10 col-md-6 ">
              <p>
                {animal.gender === "Hembra" ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-gender-female"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"
                      />{" "}
                    </svg>
                    <p>Hembra</p>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-gender-male"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
                      />
                    </svg>
                    <p>Macho</p>
                  </>
                )}
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
              <p>
                <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
                {animal.location}
              </p>
            </div>

            <Link to={"/perfil/" + animal.creator}>
              <strong>Protectora </strong>
            </Link>
            {animal.adopted === false && (!(user.admin || user._id === animal.creator)) && <button
              type="button"
              className="btn text-white w-25 mx-auto botonAdoptar"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@getbootstrap"
            >
              Adoptar
            </button>}
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
                          // onChange={handlerNombre}
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
                          // onChange={handlerTelefono}
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
                          // onChange={handlerEmail}
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
                          // onChange={handlerText}
                          placeholder="Pregunta a la protectora..."
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn"
                      id="btSend"
                      // onClick={handlerSendEmail}
                    >
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
