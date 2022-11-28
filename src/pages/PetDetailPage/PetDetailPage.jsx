import { useContext, useEffect, useState } from "react";

import animalService from "../../services/animal.service";
import { useParams } from "react-router-dom";
import "./PetDetailPage.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import ToGetBack from "./components/ToGetBack";
import IconFalsy from "./components/IconFalsy";
import IconTruthy from "./components/IconTruthy";


// import userService from "../../services/user.service";
// import DeleteAnimal from "../../components/Delete/DeleteAnimal";

// import Maps from "../../components/Maps/maps";

function PetDetailPage() {
  //MOSTRAR ANIMAL
  const [animal, setAnimal] = useState("");
  const { user, isLoggedIn } = useContext(AuthContext);
  const { animalId } = useParams();

  // const [protectora, setProtectora] = useState("");

  // const [nombreAnon, setNombreAnon] = useState();
  // const [telefonoAnon, setTelefonoAnon] = useState();
  // const [emailAnon, setEmailAnon] = useState();
  // const [mensajeAnon, setMensajeAnon] = useState();

  // const handlerNombre = ({ target }) => setNombreAnon(target.value);
  // const handlerTelefono = ({ target }) => setTelefonoAnon(target.value);
  // const handlerEmail = ({ target }) => setEmailAnon(target.value);
  // const handlerText = ({ target }) => setMensajeAnon(target.value);

  useEffect(() => {
    animalService
      .getAnimal(animalId)
      .then((result) => {
        setAnimal(result.data);
        // userService.getUser(result.data.creator).then((result) => {
        //   console.log("CREADOR ANIMAL ", result.data);
        //   setProtectora(result.data);
        // });
      })
      .catch((err) => console.log(err));

    // eslint-disable-next-line
  }, []);

  // const handlerSendEmail = () => {
  //   console.log(protectora);
  //   const mailData = {
  //     userId: protectora._id,
  //     email: protectora.email,
  //     nombreAnon,
  //     telefonoAnon,
  //     emailAnon,
  //     mensajeAnon,
  //   };

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
  //   console.log('hola')
  //   const animalDb = animalService.getAnimal(animalId);
  //   const protectoraDb = userService.getUser(animal.creator);
  //   Promise.all([animalDb, protectoraDb])
  //     .then((res) => {
  //       setAnimal(res[0].data)
  //       setProtectora(res[1].data)
  //       console.log(res[0])
  //       console.log(res[1])
  //     }).catch(err => console.log(err))
  //   // eslint-disable-next-line
  // }, []);

  // const handlerSendEmail = () => {
  //   console.log(protectora);
  //   const mailData = {
  //     userId: protectora._id,
  //     email: protectora.email,
  //     nombreAnon,
  //     telefonoAnon,
  //     emailAnon,
  //     mensajeAnon,
  //   };

  //   userService
  //     .sendEmail(mailData)
  //     .then(console.log("adopción solicitada"))
  //     .catch((err) => console.log(err));
  // };

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
            {isLoggedIn && (user.admin || user._id === animal.creator) && (
              <>
                <Link to={"/animales/" + animal._id + "/editar"}>
                  <img
                    className="penEdit"
                    src="../../penEdit.png"
                    alt="editar"
                  ></img>
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
            {/* <h2 className="text-start m-3">{animal.animalName}</h2> */}
            <p className="text-start w-75" id="description">
              {animal.description}
            </p>

            <div className="col-10 col-md-6 ">
              <p>
                <strong>Especie: </strong>
                {animal.animalType}
              </p>
              {/* <p className="card-text">
                <strong>Fecha de nacimiento: </strong>
                {animal.birthday}
              </p> */}
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
              <p>
                <strong>Etapa: </strong>
                {animal.age}
              </p>
            </div>

            <div className="col-10 col-md-6">
              <p>
                <strong>Localización: </strong>
                {animal.location}
              </p>

              <p>
                <strong>Nivel de actividad: </strong>
                {animal.lifestyle}
              </p>

              <p>
                <strong>Castrado: </strong>
                {animal.castrated === true ? (
                  <IconTruthy />
                ) : (
                  <IconFalsy />
                )}
              </p>
              <p>
                <strong>Vacunado: </strong>
                {animal.vaccines === true ? (
                  <IconTruthy />
                ) : (
                  <IconFalsy />
                )}
              </p>
              <p>
                <strong>Microchip: </strong>
                {animal.microchip === true ? (
                  <IconTruthy />
                ) : (
                  <IconFalsy />
                
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
              <ToGetBack />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetDetailPage;
