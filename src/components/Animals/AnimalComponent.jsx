import "./AnimalComponent.css";
import IconoHembra from "./components/iconos/IconoHembra";
import IconoMacho from "./components/iconos/IconoMacho";
import IconoLocation from "./components/iconos/IconoLocation";
import LinkMasInformacion from "./components/Links/LinkMasInformacion";
import LinkAdoptado from "./components/Links/LinkAdoptado";

function AnimalComponent({ animal }) {
  return (
    <div className="col-8 col-md-3 m-3 m-lg-4 mx-auto" id="cajaAnimal">      
      <img id="fotoAnimal" src={animal.imgAnimal} className="card-img-top " alt={animal.animalType} />
      <div className="card-body">
        <br/>
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
            <IconoLocation />
          {animal.location} <br></br>
            <img className="birthdayIcon" src="../../birthdayIcon.png" alt="nacimiento" />
          {animal.birthday.toString().slice(0, 10)} <br></br>
        </p>
        
        {animal.adopted === false ? (
          <Link to={"/animales/" + animal._id} className="linkInfo">
            <div className="card-footer text-muted" id="footerCard">
              <span className="text-white text-bold">Más información</span>
            </div>
          </Link>
        ) : (
            <LinkAdoptado animal={animal} />
        )}
      </div>
    </div>
  );
}

export default AnimalComponent;
