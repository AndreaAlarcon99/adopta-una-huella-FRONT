import AnimalComponent from "../../components/Animals/AnimalComponent";
import "./HomePage.css";
import { useEffect, useState } from "react";
import animalService from "../../services/animal.service";
import { Link } from "react-router-dom";

function HomePage() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    animalService.getAnimals().then((results) => {
      setAnimals(results.data);
    });
  }, []);

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
        </div>
      </div>
    </div>
  );
}

export default HomePage;
