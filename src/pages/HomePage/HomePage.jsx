import AnimalComponent from "../../components/Animals/AnimalComponent";
import "./HomePage.css";
import { useEffect, useState } from "react";
import animalService from "../../services/animal.service";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function HomePage() {
  const [animals, setAnimals] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    animalService.getOldAnimals().then((results) => {
      setAnimals(results.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <div id="tituloPortada">
        <p>Te ayudamos a encontrar a tu nuevo mejor amigo</p>
        <Link to="/animales" className="dropdown-item">
          <button className="btn">Animales en adopción</button>
        </Link>
      </div>
      <div id="portada">
        <div id="imagen1">
          <img src="../../../perroabrazo.jpeg" alt="perro loco" />
        </div>
        <div id="imagen2">
          <img src="../../../perroloco.jpeg" alt="perro loco" />
        </div>
      </div>
      <div>
        <h4 className="text-start m-4">NUESTROS ANCIANOS</h4>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="container-fluid" id="alinear">
            <div className="row justify-content-center">
              {animals.map((animal) => (
                <AnimalComponent animal={animal} key={animal._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
