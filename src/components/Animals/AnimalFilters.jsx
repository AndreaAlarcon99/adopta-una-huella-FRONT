import animalService from "../../services/animal.service";
import "./AnimalFilters.css";
import TipoAnimal from "./components/Filtros/TipoAnimal";
import Genero from "./components/Filtros/Genero";
import Tamano from "./components/Filtros/Tamano";
import Etapa from "./components/Filtros/Etapa";
import Actividad from "./components/Filtros/Actividad";
import IconoFiltros from "./components/iconos/IconoFiltros";

function AnimalFilters({ updateAnimals }) {

  let valoresFiltro = {
    animalType: [],
    gender: [],
    age: [],
    size: [],
    lifestyle: [],
  };

  const submitHandler = (e) => {
    e.preventDefault();
    animalService
      .getAnimals(valoresFiltro)
      .then(result =>  updateAnimals(result.data))
      .catch(err => console.log("Error: ", err));
  };

  return (
    <nav className="navbar  bg-transparent" id="nav">
      <div className="container-fluid" id="index">
        <button
          className="btn bg-transparent"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span>
            <IconoFiltros />
            Buscar por filtros
          </span>
        </button>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div id="filtrosLateral">
            <form onSubmit={submitHandler}>
              <div className="offcanvas-body">
                <TipoAnimal valoresFiltro={valoresFiltro}/>
                <Genero valoresFiltro={valoresFiltro}/>
                <Tamano valoresFiltro={valoresFiltro}/>
                <Etapa valoresFiltro={valoresFiltro}/>
                <Actividad valoresFiltro={valoresFiltro}/>
                <button className="btn" type="submit" id="aplicarFiltros">
                  Aplicar filtros
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default AnimalFilters;
