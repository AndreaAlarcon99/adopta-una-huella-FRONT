import "./SignupPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("");
  const [imgUser, setImgUser] = useState("");
  const [description, setDescription] = useState("");
  const [licence, setLicence] = useState("");
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handlePassword2 = (e) => setPassword2(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleImgUser = (e) => setImgUser(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleLicence = (e) => setLicence(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);

  const handleSignupSubmit = (e) => {
    console.log("hola que tal ")
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = {
      email,
      password,
      username,
      // imgUser,
      description,
      licence,
      location,
    };

    // Send a request to the server using axios
    /* 
    const authToken = localStorage.getItem("authToken");
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/signup`, 
      requestBody, 
      { headers: { Authorization: `Bearer ${authToken}` },
    })
    .then((response) => {})
    */

    // Or using a service
    console.log("requestbody...", requestBody)
    authService
      .signup(requestBody)
      .then((response) => {
        // If the POST request is successful redirect to the login page
        navigate("/");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
        console.log("error donde estas", error)
      });
  };

  return (
    <div className="SignupPage">
      <h1>Darse de alta</h1>

      <form onSubmit={handleSignupSubmit}>
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
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password2}
            onChange={handlePassword2}
          />
          <label htmlFor="floatingPassword">Repetir contraseña</label>
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
        <div className="form-group">
          <label>
            Añadir foto de perfil:
            <input
              type="file"
              name="perfil-cover-image"
              className="form-control-file"
              value={imgUser}
              onChange={handleImgUser}
            />
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Registrarme
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>¿Ya tienes cuenta?</p>
      <Link to={"/login"}> Entrar</Link>
    </div>
  );
}

export default SignupPage;
