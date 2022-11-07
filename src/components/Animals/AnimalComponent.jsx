import { Link } from "react-router-dom";
import "./AnimalComponent.css";

function AnimalComponent({ animal }) {
  return (
   
      <div className="col-7 col-md-3 col-lg-3 p-0" id="cajaAnimal">
        <img
          src={animal.imgAnimal}
          className="card-img-top "
          alt={animal.animalType}
        />
        
        <div className="card-body">
        <br></br>
          <h4 className="card-title">{animal.animalName}</h4>

          <p className="card-text pt-1 cardDetails">
            {animal.gender}<br></br>
            <img className="locationIcon" src="../../locationIcon.png" alt="ubicacion"></img>{animal.location} <br></br>
            <img className="birthdayIcon" src="../../birthdayIcon.png" alt="nacimiento"></img>{animal.birthday} <br></br>
            <Link to={"/animales/" + animal._id} className="linkInfo">Más info</Link>
          </p>
        </div>

      </div>
   
  );
}

export default AnimalComponent;
