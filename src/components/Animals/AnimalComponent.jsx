import { Link } from "react-router-dom";
import "./AnimalComponent.css";

function AnimalComponent({ animal }) {
  return (
    <div className="col-8 col-md-3 m-3 m-lg-4 mx-auto" id="cajaAnimal">
      <div>
        <img
          id="fotoAnimal"
          src={animal.imgAnimal}
          className="card-img-top "
          alt={animal.animalType}
        />
      </div>

      <div className="card-body">
        <br></br>
        <h4 className="card-title">
          {animal.animalName}
          {animal.gender === "Hembra" ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-gender-female"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-gender-male"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
                />
              </svg>
            </>
          )}
        </h4>
        <p className="card-text pt-1 cardDetails">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          {animal.location} <br></br>
          <img
            className="birthdayIcon"
            src="../../birthdayIcon.png"
            alt="nacimiento"
          ></img>
          {animal.birthday.toString().slice(0, 10)} <br></br>
        </p>
        
        {animal.adopted === false ? (
          <Link to={"/animales/" + animal._id} className="linkInfo">
            <div className="card-footer text-muted" id="footerCard">
              <span className="text-white text-bold">Más información</span>
            </div>
          </Link>
        ) : (
          <Link to={"/animales/" + animal._id} className="linkInfo">
            <div className="card-footer text-muted" id="footerCardAdopted">
              <span className="text-white text-bold">ADOPTADO</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default AnimalComponent;
