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
        userService.getUser(result.data.creator).then((result) => {
          console.log("CREADOR ANIMAL ", result.data);
          setProtectora(result.data);
        });
      })
      .catch((err) => console.log(err));

    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   let prom1 = animalService.getAnimal(animalId);
  //   let prom2 = userService.getUser(animal.creator);

  //   Promise.all([prom1, prom2]).then((response) => {
  //     setAnimal(response.data);
  //     userService.sendEmail(mailData).then((mailData) => {
  //       console.log("maildata: ", mailData);
  //     });
  //   });
  // });
  // useEffect(() => {
  //   const animalDb = animalService.getAnimal(animalId);
  //   const userDb = userService.getUser(animal.creator);
  //   Promise.all([animalDb, userDb])
  //     .then((animalDb) => setAnimal(animalDb.data))
  //     .then((userDb) => setUser(userDb.data));
  //   // eslint-disable-next-line
  // }, []);

  const handlerSendEmail = () => {
    console.log(protectora);
    const mailData = {
      userId: protectora._id,
      email: protectora.email,
      nombreAnon,
      telefonoAnon,
      emailAnon,
      mensajeAnon,
    };

    userService
      .sendEmail(mailData)
      .then(console.log("adopción solicitada"))
      .catch((err) => console.log(err));
  };

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
              <Link to={"/animales/" + animal._id + "/editar"}>
                {" "}
                <img
                  className="penEdit"
                  src="../../penEdit.png"
                  alt="editar"
                ></img>
              </Link>
            )}
            <h2 className="text-start m-3">{animal.animalName}</h2>
            <p className="text-start w-75" id="description">
              {animal.description}
            </p>

            <div className="col-10 col-md-6 ">
              <p>
                <strong>Especie: </strong>
                {animal.animalType}
              </p>
              <p className="card-text">
                <strong>Fecha de nacimiento: </strong>
                {animal.birthday}
              </p>
              <p>
                <strong>Sexo: </strong>
                {animal.gender}
              </p>
              <p className="card-text">
                <strong>Tamaño: </strong>
                {animal.size}
              </p>

              <p>
                <strong>Peso: </strong>
                {animal.weight} Kg
              </p>
            </div>

            <div className="col-10 col-md-6">
              <p>
                <strong>Localización: </strong>
                {animal.location}
              </p>
              <p>
                <strong>Etapa: </strong>
                {animal.age}
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
                          onChange={handlerNombre}
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
                      id="btSend"
                      onClick={handlerSendEmail}
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
