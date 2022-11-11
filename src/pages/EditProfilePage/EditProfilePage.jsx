import { useEffect, useState } from "react";
import userService from "../../services/user.service";
import { useParams, useNavigate } from "react-router-dom";
import "./EditProfilePage.css";

function EditProfilePage() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [imgUser, setImgUser] = useState("");
  const [email, setEmail] = useState("");

  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    userService
      .getUser(userId)
      .then((response) => {
        const userToUpdate = response.data;
        setUsername(userToUpdate.username);
        setDescription(userToUpdate.description);
        setLocation(userToUpdate.location);
        setEmail(userToUpdate.email);
        setImgUser(userToUpdate.imgUser);
      })
      .catch((error) => console.log("soy error de catch en getUser ", error));
  }, [userId]);

  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      username,
      description,
      location,
      imgUser,
    };

    userService
      .editUser(user, userId)
      .then((response) => {
        navigate("/perfil/" + userId);
      })
      .catch((error) =>
        console.log("soy error de catch en editUser ", error, user)
      );
  };

  return (
    <div id="formEdit">
      <div>
        <img className="rounded-circle" src={imgUser} alt="protectora" />
      </div>
      <div>
        <form id="divEdit" className="container" onSubmit={submitHandler}>
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
            <label htmlFor="email" className="form-label ">
              Email:
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit" className="btn btn-primary">
            Editar perfil
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfilePage;
