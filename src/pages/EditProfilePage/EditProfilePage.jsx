import { useEffect, useState } from "react";
import userService from "../../services/user.service";
import { useParams, useNavigate } from "react-router-dom";
import "./EditProfilePage.css";
import EditUsername from "./components/EditUsername";
import EditEmail from "./components/EditEmail";
import EditDescription from "./components/EditDescription";
import EditLocation from "./components/EditLocation";

function EditProfilePage() {

  const [userToUpdate, setUserToUpdate] = useState({})

  const [username, setUsername] = useState(userToUpdate.username);
  const [description, setDescription] = useState(userToUpdate.description);
  const [location, setLocation] = useState(userToUpdate.location);
  const [imgUser, setImgUser] = useState(userToUpdate.imgUser);
  const [email, setEmail] = useState(userToUpdate.email);

  const handlerUsername = valor => setUsername(valor);
  const handlerDescription = valor => setDescription(valor);
  const handlerLocation = valor => setLocation(valor);
  const handlerEmail = valor => setEmail(valor);

  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    userService
      .getUser(userId)
      .then((response) => {
        setUserToUpdate(response.data);
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
      email
    };

    userService
      .editUser(user, userId)
      .then(() => navigate("/perfil/" + userId))
      .catch(error => console.log("soy error de catch en editUser ", error, user));
  };

  return (
    <div id="formEdit">
      <div>
        <img className="rounded-circle" src={imgUser} alt="protectora" />
      </div>
      <div>
        <form id="divEdit" className="container" onSubmit={submitHandler}>
          <h2>Editar datos de {username}</h2>
          <EditUsername userToUpdate={userToUpdate} handlerUsername={handlerUsername} />
          <EditEmail userToUpdate={userToUpdate} handlerEmail={handlerEmail} />
          <EditDescription userToUpdate={userToUpdate} handlerDescription={handlerDescription} /> 
          <EditLocation userToUpdate={userToUpdate} handlerLocation={handlerLocation} />
          <button type="submit" className="btn btn-primary">
            Editar perfil
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfilePage;
