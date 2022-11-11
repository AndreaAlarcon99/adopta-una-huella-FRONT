import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg  sticky-top   ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="../../../HuellaNueva.png" alt="logo" id="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Inicio
              </Link>
            </li>
            <li className="nav-item dropdown">
              <p
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Nuestros animales
              </p>
              <ul className="dropdown-menu">
                <li>
                  {" "}
                  <Link to="/animales" className="dropdown-item">
                    {" "}
                    En adopción{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/adoptados" className="dropdown-item">
                    {" "}
                    Adoptados{" "}
                  </Link>{" "}
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/protectoras" className="nav-link">
                Protectoras
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/informacion-adopcion" className="nav-link">
                Información
              </Link>
            </li>

            {isLoggedIn ? (
              <>
                <Link to="/crear-animal" className="nav-link">
                  {" "}
                  Añadir animal{" "}
                </Link>
                <Link to={"/perfil/" + user._id} className="nav-link">
                  {" "}
                  Mi perfil{" "}
                </Link>
                <button className="btn m-2" id="btLogOut" onClick={logOutUser}>
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button
                    className="btn btn-outline-secondary m-1"
                    id="btLogIn"
                  >
                    {" "}
                    Iniciar sesión{" "}
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="btn m-1 " id="btSignUp">
                    {" "}
                    Registrarse{" "}
                  </button>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// position-absolute top-100 start-50
