import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (

<nav className="navbar fixed-top">
      <div className="container-fluid">
        <img className="navbar-brand" src="../../../logo.png" alt="logo" id="logo" />
        
        {isLoggedIn && (
        <>
          <button className="btn" onClick={logOutUser}>Logout</button>


          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button className="btn">Sign Up</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button className="btn">Login</button>{" "}
          </Link>
        </>
      )}

    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Adopta una huella</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
           <Link  to="/" className="nav-link active" aria-current="page">Home</Link> 
          </li>
              <li className="nav-item">
           <Link  to="/informacion-adopcion" className="nav-link" >Información</Link> 
                
          </li>
              <li className="nav-item dropdown">
                <li className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Nuestros animales</li>
            {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Nuestros animales
            </a> */}
            <ul className="dropdown-menu">
                  <li><Link to="/animales" className="dropdown-item">Animales en adopción</Link></li>
                  <li>
                <hr className="dropdown-divider"/>
                  </li>
                  <li><Link to="/adoptados" className="dropdown-item">Animales que han sido adoptados</Link></li>
                  </ul>
          </li>
            </ul> 
            
      
           
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>






    // YA VENIA HECHO
    // <nav id="navbar">
    //   <img classNameName="p-3"src="../../../logo.png" alt="logo" id="logo"/>
    //   <Link to="/">
    //     <button classNameName="btn">Home</button>
    //   </Link>

    //   {isLoggedIn && (
    //     <>
    //       <button classNameName="btn" onClick={logOutUser}>Logout</button>

    //       <Link to="/profile">
    //         <button>Profile</button>
    //         {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
    //       </Link>

    //       <span>{user && user.name}</span>
    //     </>
    //   )}

    //   {!isLoggedIn && (
    //     <>
    //       <Link to="/signup">
    //         {" "}
    //         <button classNameName="btn">Sign Up</button>{" "}
    //       </Link>
    //       <Link to="/login">
    //         {" "}
    //         <button classNameName="btn">Login</button>{" "}
    //       </Link>
    //     </>
    //   )}
    // </nav>
  );

}

export default Navbar;
