import { useEffect, useState } from "react";
import userService from "../../services/user.service";
import { useParams, useNavigate } from "react-router-dom";
import "./EditProfilePage.css";
import Loading from "../../components/Loading/Loading";


function EditProfilePage() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [imgUser, setImgUser] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const { userId } = useParams();
  const navigate = useNavigate();

  //to get the user data
  useEffect(() => {
    userService
      .getUser(userId)
      .then((response) => {
        const userToUpdate = response.data;
        setUsername(userToUpdate.username);
        setDescription(userToUpdate.description);
        setLocation(userToUpdate.location);
        setImgUser(userToUpdate.imgUser);
      })
      .catch((error) => console.log("Error: ", error));
  }, [userId]);

  //to change the user image
  const submitImgUserHandler = (e) => {
    e.preventDefault();
    const user = new FormData();
    
    user.append("imgUser", imgUser);
    

    setIsLoading(true);

    //update user image
    userService
      .editUser(user, userId)
      .then((response) => {
        setIsLoading(false);
        navigate("/perfil/" + userId);
      })
      .catch((error) =>
        console.log("Error: ", error, user)
      );
  };

  //to change the user data
  const submitHandler = (e) => {
    e.preventDefault();

    const user = {
      username,
      description,
      location
    }

    //update user data
    userService
      .editUser(user, userId)
      .then((response) => {
        setIsLoading(false);
        navigate("/perfil/" + userId);
      })
      .catch((error) =>
        console.log("Error: ", error, user)
      );
  };

  return (
    <div id="formEdit">
      <div>
      <div className="col-10 col-md-6 p-0 m-auto px-md-5">
      {isLoading ? <Loading /> : <>
            <img
              id="imgProtectora"
              src={imgUser}
              className="img-fluid w-75 imagenAnimal shadow-lg"
              alt={username}
            />
            <br></br>
            </>
          }
      <button
              type="button"
              className="btn m-3"
              id="btnSignUp2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Editar foto
            </button>
            <hr></hr>
            <div
              className="modal fade mt-5"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content ">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Editar foto perfil
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <form
                    onSubmit={submitImgUserHandler}
                    encType="multipart/form-data"
                  >
                    <div className="modal-body imgUserModalEdit mt-5">
                      <label className="mb-4">Nueva imagen: </label>
                      <br></br>
                      <input
                        type="file"
                        name="profileImage"
                        onChange={(e) => setImgUser(e.target.files[0])}
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="btn"
                        id="btnSignUp2"
                        data-bs-dismiss="modal"
                      >
                        Guardar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              </div>
            </div>
        <form id="divEdit" className="container" encType="multipart/form-data" onSubmit={submitHandler}>
          <h2>Editar datos de {username}</h2>
          <div className="mb-3">
            <label htmlFor="protectora" className="form-label ">
              Nombre de la protectora:
            </label>
            <input
              type="text"
              className="form-control"
              id="protectora"
              aria-describedby="emailHelp"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">
              Descripción:
            </label>
            <textarea
              className="form-control"
              id="descripcion"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="ubicacion" className="form-label">
              Ubicación de la protectora:
            </label>
            <input
              type="text"
              className="form-control"
              id="ubicacion"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          {/* <div className="mb-5" id="fileUpload">
            <p>Foto de perfil</p>
            <input 
              className="mb-4 px-4"
              type="file"
              onChange={(e) => setImgUser(e.target.files[0])}
            />
            <label htmlFor="subir imagen"></label>
          </div> */}
          <button type="submit" className="btn" id="btnSignUp2">
            Editar perfil
          </button>
          {isLoading ? <Loading /> : <></>}
        </form>
      </div>
    </div>
  );
}

export default EditProfilePage;














