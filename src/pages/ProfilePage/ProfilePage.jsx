import { useState, useEffect, useContext } from "react";
import AnimalComponent from "../../components/Animals/AnimalComponent";
import { useParams } from "react-router-dom";
import userService from "../../services/user.service";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import "./ProfilePage.css";
import DeleteUser from '../../components/Delete/DeleteUser'

function ProfilePage() {
  const [protectora, setProtectora] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useParams();

  const { user, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    userService
      .getUser(userId)
      .then((result) => {
        setProtectora(result.data);
        setIsLoading(false);
        // console.log("result.data: ", result.data);
      })
      .catch((err) => console.log("error de profile: ", err));
    // eslint-disable-next-line
  }, []);

  //   const [nombreAnon, setNombreAnon] = useState();
  //   const [telefonoAnon, setTelefonoAnon] = useState();
  //   const [emailAnon, setEmailAnon] = useState();
  //   const [mensajeAnon, setMensajeAnon] = useState();

  //   const handlerNombre = ({ target }) => setNombreAnon(target.value);
  //   const handlerTelefono = ({ target }) => setTelefonoAnon(target.value);
  //   const handlerEmail = ({ target }) => setEmailAnon(target.value);
  //   const handlerText = ({ target }) => setMensajeAnon(target.value);

  //   const handlerSendEmail = () => {
  //     const mailData = {
  //       email,
  //       nombreAnon,
  //       telefonoAnon,
  //       emailAnon,
  //       mensajeAnon
  //     }
  //     userService.sendEmail(mailData)
  //     .then(console.log('adopción solicitada'))
  //     .catch(err =>console.log(err))

  // <h2 className="text-start m-3">{animal.animalName}</h2>
  // <p className="text-start w-75" id="description">
  //   {animal.description}
  // </p>

  return (
    <div className="container-fluid mt-5 p-0 w-100">
      {isLoading ? (
        <p>cargando...</p>
      ) : (
        <div className="row">
          <div className="col-10 col-md-6 p-0 m-auto px-md-5">
            <img
              id="imgProtectora"
              src={protectora.imgUser}
              className="img-fluid w-75 imagenAnimal shadow-lg"
              alt={protectora.username}
            />
          </div>
          <div className="col-12 col-md-6 text-start px-5 m-5 m-md-0 px-md-0">
            <div className="row p-0 w-100">
              {isLoggedIn && (user.admin || user._id === protectora._id) && (
                <Link to={"/perfil/" + protectora._id + "/editar"}>
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
              )}
              <h2 className="text-start m-3 p-0" id="nombreProtectora">
                {protectora.username}
              </h2>
              <p className="w-75">
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
                {protectora.location}
              </p>
              <p className="text-start w-75" id="description">
                {protectora.description}
              </p>
              {isLoggedIn && (user.admin || user._id === userId) && 
                  <DeleteUser  user={user}/>
              }
            </div>
          </div>
          <h3 className="text-start pt-5 px-5 mx-5 w-50" id="nuestrosAnimales">
            Nuestros animales
          </h3>
          <div className="container mx-5">
            <div className="row">
              {protectora.ourAnimals.length === 0 ? (
                <div>
                  <p>Esta protectora no tiene ningún animal en adopción</p>
                </div>
              ) : (
                protectora.ourAnimals.map((animal) => {
                  return <AnimalComponent animal={animal} key={animal._id} />;
                })
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
