import { useContext, useEffect, useState } from "react";

import animalService from "../../services/animal.service";
import { useParams } from "react-router-dom";
import "./PetDetailPage.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import Loading from "../../components/Loading/Loading";

import userService from "../../services/user.service";
//para maps

// import Maps from "../../components/Maps/maps";

function PetDetailPage() {
  //MOSTRAR ANIMAL
  const [animal, setAnimal] = useState("");
  const { user, isLoggedIn } = useContext(AuthContext);
  const { animalId } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [protectora, setProtectora] = useState("");

  const [nombreAnon, setNombreAnon] = useState();
  const [telefonoAnon, setTelefonoAnon] = useState();
  const [emailAnon, setEmailAnon] = useState();
  const [mensajeAnon, setMensajeAnon] = useState();

  const handlerNombre = ({ target }) => setNombreAnon(target.value);
  const handlerTelefono = ({ target }) => setTelefonoAnon(target.value);
  const handlerEmail = ({ target }) => setEmailAnon(target.value);
  const handlerText = ({ target }) => setMensajeAnon(target.value);

  useEffect(() => {
    animalService
      .getAnimal(animalId)
      .then((result) => {
        setAnimal(result.data);
        setIsLoading(false);

        userService.getUser(result.data.creator).then((result) => {
          setProtectora(result.data);
        });
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  const handlerSendEmail = () => {
    const mailData = {
      userId: protectora._id,
      email: protectora.email,
      animalName: animal.animalName,
      nombreAnon,
      telefonoAnon,
      emailAnon,
      mensajeAnon,
    };

    userService
      .sendEmail(mailData)
      .then(console.log("Datos del Email :", mailData))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-fluid mt-5 p-0 w-100">
      {isLoading ? (
        <Loading />
      ) : (
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-pencil-square penEdit p-0"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </Link>
                </>
              )}
              {animal.adopted === true ? (
                <h2 className="text-start ">
                  {animal.animalName} ha sido adoptado
                </h2>
              ) : (
                <h2 className="text-start">{animal.animalName}</h2>
              )}
              <p className="text-start w-75" id="description">
                {animal.description}
              </p>

              <div className="col-10 col-md-6 ">
                <p>
                  <strong>Especie: </strong>
                  {animal.animalType}
                </p>
                <p>
                  <strong>Sexo: </strong>
                  {animal.gender}
                </p>
                <p className="card-text">
                  <strong>Tama??o: </strong>
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
                  <strong>Localizaci??n: </strong>
                  {animal.location}
                </p>

                <p>
                  <strong>Nivel de actividad: </strong>
                  {animal.lifestyle}
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

              <Link to={"/perfil/" + animal.creator}>
                <strong>Ver perfil de la protectora </strong>
              </Link>

              {animal.adopted === false && (
                <button
                  type="button"
                  className="btn text-white w-25  botonAdoptar"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@getbootstrap"
                >
                  Adoptar
                </button>
              )}

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
                            onChange={handlerNombre}
                            id="recipient-name"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="recipient-name"
                            className="col-form-label"
                          >
                            Tel??fono:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            onChange={handlerTelefono}
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
                            onChange={handlerEmail}
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
                            onChange={handlerText}
                            placeholder="Pregunta a la protectora..."
                          ></textarea>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn"
                        data-bs-dismiss="modal"
                        id="btSend"
                        onClick={handlerSendEmail}
                      >
                        Enviar mensaje
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to={"/animales"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-backspace m-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                  <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
                </svg>
                Volver atr??s
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PetDetailPage;
