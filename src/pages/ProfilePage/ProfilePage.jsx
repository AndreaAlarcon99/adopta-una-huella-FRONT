import "./ProfilePage.css";
import animalService from "../../services/animal.service";
import userService from "../../services/user.service";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import authService from "../../services/auth.service";

function ProfilePage() {
  const { userId } = useParams();
  const [enAdopcion, setEnAdopcion] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    userService
      .getUser(userId)
      .then((results) => {
        console.log("SOY RESULTS.DATA", results.data);
        return setUser(results.data);
      })
      .then(console.log("SOY EL NUEVO STATE DE USER3 ", user))
      // animalService.getAnimalesFiltrados({creator: userId})
      // .then(results => {
      //   // console.log('GETANIMAL: ' + results.data)
      //   return setEnAdopcion(results.data)
      // })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    // username, email, imgUser, description, location

    <div className="container-fluid mt-5 p-0 w-100">
      <div className="row">
        <div className="col-10 col-md-6 p-0 m-auto">
          <img
            className="img-fluid w-75 imagenUser shadow-lg"
            // src={user.imgUser}
            // alt={user.username}
            src="https://picsum.photos/id/237/200/300"
            alt="imagenUser"
          />
        </div>

        <div className="col-12 col-md-6 mt-md-5 m-5 m-md-0 text-center">
          <div id="containerDescription">
            <h3>Soy la protectora h3</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              exercitationem itaque ullam ut aut sapiente cumque tempore illum
              voluptates qui! Harum qui neque deserunt quas voluptate dolorum.
              Nostrum, laboriosam nihil.
            </p>
            <button
              type="button"
              className="btn text-white w-25 mx-auto mb-3"
              id="botonUser"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@getbootstrap"
            >
              Contacto
            </button>
            <div className="container">
              <h3>Soy un array de imagenes</h3>
            </div>
          </div>

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
                      <label htmlFor="message-text" className="col-form-label">
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
  );
}

export default ProfilePage;
