import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar({userId}) {

  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand" id="totalNavbar">
      <div className="container-fluid" id="containerNavbar">
        <img
          className="navbar-brand"
          src="../../../HuellaNueva.png"
          alt="logo"
          id="logo"
        />
        <div
          className="collapse navbar-collapse justify-content-end p-2"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav" >
              <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/informacion-adopcion" className="nav-link">
                Información
              </Link>
            </li>
            <li className="nav-item dropdown">
              <p
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Animales
              </p>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/animales" className="dropdown-item">
                    En adopción
                  </Link>
                </li>
                <li>
                  <Link to="/adoptados" className="dropdown-item">
                    Adoptados
                  </Link>
                </li>
              </ul>
            </li>
            
            <div className="container-fluid" id="botones">
              {isLoggedIn && (
                <Link to={'/perfil/' + userId} className="nav-link">
                  Mi perfil
                </Link>
              )}
              {!isLoggedIn && (
                <>
                  <Link to="/login">
                    <button className="btn btn-outline-secondary m-1" id="btLogIn">
                      Iniciar sesión
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="btn m-1" id="btSignUp">
                      Registrarse
                    </button>
                  </Link>
                </>
              )}

              {isLoggedIn && (
                <div>
                  <button className="btn" id="btLogOut" onClick={logOutUser}>
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
