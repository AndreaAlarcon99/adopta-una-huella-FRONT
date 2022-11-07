import "./SignupPage.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import { AuthContext } from "../../context/auth.context";

// import axios from "axios";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [licence, setLicence] = useState("");
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handlePassword2 = (e) => setPassword2(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleLicence = (e) => setLicence(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleSignupSubmit = (e) => {
    console.log("hola que tal ");
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = {
      email,
      password,
      username,
      description,
      licence,
      location,
    };

    authService
      .signup(requestBody)
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
        console.log("error donde estas", error);
      });
  };

  return (
    <div className="SignupPage" id="divSignupPage">
      <h1 className="text-start m-5">Darse de alta</h1>

      <form onSubmit={handleSignupSubmit}>
        <div className="seccion">
          <h5 className="text-start m-4"> Datos personales</h5>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder=" "
              value={username}
              onChange={handleUsername}
            />
            <label htmlFor="floatingInput">Nombre del centro </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={handleEmail}
            />
            <label htmlFor="floatingInput">Email </label>
          </div>
        </div>
        <div className="seccion">
          <h5 className="text-start m-4"> Datos del centro</h5>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder=" "
              value={licence}
              onChange={handleLicence}
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
              onChange={handleLocation}
            />
            <label htmlFor="floatingInput">Localización del centro </label>
          </div>

          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder=" "
              id="floatingTextarea2"
              style={{ height: "100px" }}
              value={description}
              onChange={handleDescription}
            ></textarea>
            <label htmlFor="floatingTextarea2">Descripción</label>
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
              onChange={handlePassword}
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
              onChange={handlePassword2}
            />
            <label htmlFor="floatingPassword2">Repetir contraseña</label>
          </div>
        </div>

        <br></br>
        <button className="btn" id="btnSignUp2" type="submit">
          Registrarme

        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <br></br>
      <p>¿Ya tienes cuenta?
      <Link to={"/login"} id="btnLogIn2"> Entrar</Link></p>
    </div>
  );
}

export default SignupPage;
