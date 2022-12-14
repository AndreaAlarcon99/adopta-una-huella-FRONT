import "./SignupPage.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import { AuthContext } from "../../context/auth.context";
import Error from "../../components/Error/Error";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [licence, setLicence] = useState("");
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [imgUser, setImgUser] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setErrorMessage("");

    if (password !== password2) {
      setErrorMsg("Las contraseñas no coinciden.");
      return;
    }
    if (email === "") {
      setErrorMsg("És obligatorio introducir un correo electrónico.");
      return;
    }
    if (password === "") {
      setErrorMsg("Contraseña requerida.");
      return;
    }
    if (username === "") {
      setErrorMsg("Nombre requerido.");
      return;
    }
    if (description === "") {
      setErrorMsg("Descripción requerida.");
      return;
    }
    if (licence === "") {
      setErrorMsg("licencia requerida.");
      return;
    }
    if (location === "") {
      setErrorMsg("Localización requerida.");
      return;
    }

    const uploadData = new FormData();
    uploadData.append("email", email);
    uploadData.append("username", username);
    uploadData.append("password", password);
    uploadData.append("imgUser", imgUser);
    uploadData.append("description", description);
    uploadData.append("licence", licence);
    uploadData.append("location", location);

    authService
      .signup(uploadData)
      .then((response) => {
        // If the POST request is successful redirect to the login page
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage" id="divSignupPage">
      <h1 className="text-start m-4">Darse de alta</h1>

      <form onSubmit={handleSignupSubmit} encType="multipart/form-data">
        <div className="seccion">
          <h5 className="text-start m-4"> Datos del centro</h5>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder=" "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="floatingName">Nombre del centro </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="nombre@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder=" "
              value={licence}
              onChange={(e) => setLicence(e.target.value)}
            />
            <label htmlFor="floatingInput">Número de licencia </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder=" "
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <label htmlFor="floatingInput">Localización del centro </label>
          </div>

          <div className="form-floating">
            <textarea
              className="form-control"
              id="floatingTextarea2"
              placeholder=" "
              style={{ height: "100px" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label htmlFor="floatingTextarea2">Descripción</label>
          </div>

          <div className="text-start mt-3" id="fileUpload">
            <h5 className="text-start m-4">Foto de perfil</h5>
            <input
              type="file"
              onChange={(e) => setImgUser(e.target.files[0])}
            />
            <label htmlFor="subir imagen"></label>
          </div>
        </div>
        <div className="seccion">
          <h5 className="text-start m-4"> Contraseña</h5>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword1">Contraseña</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword2"
              placeholder="Password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <label htmlFor="floatingPassword2">Repetir contraseña</label>
          </div>
        </div>

        {errorMsg && <Error errorMsg={errorMsg} />}
        {errorMessage && <Error errorMsg={errorMessage} />}
        <br></br>
        <button className="btn" id="btnSignUp2" type="submit">
          Registrarme
        </button>
      </form>

      <br></br>
      <p>
        ¿Ya tienes cuenta?
        <Link to={"/login"} id="btnLogIn2">
          {" "}
          Entrar
        </Link>
      </p>
    </div>
  );
}

export default SignupPage;
