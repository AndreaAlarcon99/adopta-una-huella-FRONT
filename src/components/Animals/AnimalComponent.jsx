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
          {
            animal.gender === "Hembra" ? (
              <IconoHembra />
            ) : (
              <IconoMacho />
            )
          }
        </h4>
        <p className="card-text pt-1 cardDetails">
            <IconoLocation />
          {animal.location} <br></br>
            <img className="birthdayIcon" src="../../birthdayIcon.png" alt="nacimiento" />
          {animal.birthday.toString().slice(0, 10)} <br></br>
        </p>
        {/* {animal.adopted === true && <div>ADOPTADO</div>} */}

        {
          animal.adopted === false ? (
            <LinkMasInformacion animal={animal} />
        ) : (
            <LinkAdoptado animal={animal} />
        )}
      </div>
    </div>
  );
}

export default AnimalComponent;
