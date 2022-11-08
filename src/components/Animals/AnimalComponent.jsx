import { Link } from "react-router-dom";
import "./AnimalComponent.css";

function AnimalComponent({ animal }) {
  return (
    <div className="col-8 col-md-3" id="cajaAnimal">
      <img
        src={animal.imgAnimal}
        className="card-img-top "
        alt={animal.animalType}
      />

      <div className="card-body">
        <br></br>
        <h4 className="card-title">{animal.animalName}</h4>

        <p className="card-text pt-1 cardDetails">
          {animal.gender}
          <br></br>
          <img
            className="locationIcon"
            src="../../locationIcon.png"
            alt="ubicacion"
          ></img>
          {animal.location} <br></br>
          <img
            className="birthdayIcon"
            src="../../birthdayIcon.png"
            alt="nacimiento"
          ></img>
          {animal.birthday} <br></br>
        </p>
        <Link to={"/animales/" + animal._id} className="linkInfo">
          <div className="card-footer text-muted" id="footerCard">
            <span className="text-white text-bold">Más información</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AnimalComponent;
