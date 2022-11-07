import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <img
          className="navbar-brand"
          src="../../../HuellaNueva.png"
          alt="logo"
          id="logo"
        />

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
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
            <li className="nav-item">
              <Link to="/informacion-adopcion" className="nav-link">
                Información
              </Link>
            </li>
            {isLoggedIn && (
              <Link to="/profile" className="nav-link">
                Mi perfil

              </Link>
            )}
            {isLoggedIn && (
              <Link to="/crear-animal" className="nav-link">
                Añadir animal

              </Link>
            )}
            {!isLoggedIn && (
              <>
                <Link to="/login">
                  {" "}
                  <button className="btn btn-outline-secondary m-1" id="btLogIn">
                    Iniciar sesión
                  </button>{" "}
                </Link>
                <Link to="/signup">
                  {" "}
                  <button className="btn m-1 " id="btSignUp">
                    Registrarse
                  </button>{" "}
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
          </ul>
        </div>
      </div>
    </nav>
    // <nav className="navbar sticky-top bg-light">
    //   <div className="container-fluid">
    //     <img
    //       className="navbar-brand"
    //       src="../../../HuellaNueva.png"
    //       alt="logo"
    //       id="logo"
    //     />

    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="offcanvas"
    //       data-bs-target="#offcanvasNavbar"
    //       aria-controls="offcanvasNavbar"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div
    //       className="offcanvas offcanvas-end"
    //       tabIndex="-1"
    //       id="offcanvasNavbar"
    //       aria-labelledby="offcanvasNavbarLabel"
    //     >
    //       <div className="offcanvas-header">
    //         <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
    //           Adopta una huella
    //         </h5>
    //         <button
    //           type="button"
    //           className="btn-close"
    //           data-bs-dismiss="offcanvas"
    //           aria-label="Close"
    //         ></button>
    //       </div>
    //       <div className="offcanvas-body">
    //         <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
    //           <li className="nav-item">
    //             <Link to="/" className="nav-link active" aria-current="page">
    //               Home
    //             </Link>
    //           </li>

    //           <li className="nav-item">
    //             <Link to="/informacion-adopcion" className="nav-link">
    //               Información
    //             </Link>
    //           </li>
    //           <li className="nav-item dropdown">

    //             <p
    //               className="nav-link dropdown-toggle"
    //               role="button"
    //               data-bs-toggle="dropdown"
    //               aria-expanded="false"
    //             >
    //               Nuestros animales
    //             </p>
    //             <ul className="dropdown-menu">
    //               <li>
    //                 <Link to="/animales" className="dropdown-item">
    //                   Animales en adopción
    //                 </Link>
    //               </li>
    //               <li>
    //                 <hr className="dropdown-divider" />
    //               </li>
    //               <li>
    //                 <Link to="/adoptados" className="dropdown-item">
    //                   Animales que han sido adoptados
    //                 </Link>
    //               </li>
    //             </ul>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;
