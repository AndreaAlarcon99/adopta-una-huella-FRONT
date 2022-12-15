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

  //to change the user data (image included)
  const submitHandler = (e) => {
    e.preventDefault();
    const user = new FormData();
    user.append("username", username);
    user.append("imgUser", imgUser);
    user.append("description", description);
    user.append("location", location);

    setIsLoading(true);

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
          <div className="mb-5" id="fileUpload">
            <p>Foto de perfil</p>
            <input 
              className="mb-4 px-4"
              type="file"
              onChange={(e) => setImgUser(e.target.files[0])}
            />
            <label htmlFor="subir imagen"></label>
          </div>
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














