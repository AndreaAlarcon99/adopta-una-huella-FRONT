import "./LoginPage.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };
    authService
      .login(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="LoginPage" id="divLogginPage">
      <h1>Entrar</h1>

      <form onSubmit={handleLoginSubmit}>
        <div className="form-floating m-4">
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

        <div className="form-floating m-4">
          <input
            type="password"
            className="form-control"
            id="floatingPassword3"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
          <label htmlFor="floatingPassword3">Contraseña</label>
        </div>

        <button className="btn" id="btnLogIn" type="submit">
          Entrar
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <br></br>
      <p>¿No tienes cuenta?
      <Link to={"/signup"} id="btnSignUp"> Regístrate</Link></p>
    </div>
  );
}

export default LoginPage;
