import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div id="containerHome">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" id="primerSlide">
            <img src="../../../perro.png" alt="perro" />
            <Link to="/animales" className="text-decoration-none text-white "><h1 id="amigo">Tu nuevo amigo</h1></Link>
          </div>
          <div className="carousel-item"></div>
          <div className="carousel-item"></div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
