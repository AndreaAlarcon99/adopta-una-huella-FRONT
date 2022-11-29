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
    <nav className="navbar bg-transparent" id="nav">
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
                <div className="filtroEspecifico">
                  <h4>Tipo de animal</h4>
                  <div className="form-check text-start">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      name="animalType"
                      value={true}
                      id="perro"
                      onChange={(e) => setPerro(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="perro">
                      Perros
                    </label>
                  </div>
                  <div className="form-check text-start">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="animalType"
                      value={true}
                      id="gato"
                      onChange={(e) => setGato(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="gato">
                      Gatos
                    </label>
                  </div>
                  <div className="form-check text-start">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="animalType"
                      value={true}
                      id="exotico"
                      onChange={(e) => setExotico(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="exotico">
                      Exóticos
                    </label>
                  </div>
                  <br></br>
                </div>
                <div className="filtroEspecifico">
                  <h4>Género</h4>
                  <div className="form-check text-start">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      name="gender"
                      value={true}
                      id="macho"
                      onChange={(e) => setMacho(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="macho">
                      Macho
                    </label>
                  </div>
                  <div className="form-check text-start">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="gender"
                      value={true}
                      id="hembra"
                      onChange={(e) => setHembra(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="hembra">
                      Hembra
                    </label>
                  </div>
                  <br></br>
                </div>
                <div className="filtroEspecifico">
                  <h4>Tamaño</h4>
                  <div className="form-check text-start">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="size"
                      value={true}
                      id="pequeno"
                      onChange={(e) => setPequeno(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="pequeno">
                      Pequeño
                    </label>
                  </div>
                  <div className="form-check text-start">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="size"
                      value={true}
                      id="mediano"
                      onChange={(e) => setMediano(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="mediano">
                      Mediano
                    </label>
                  </div>
                  <div className="form-check text-start">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="size"
                      value={true}
                      id="grande"
                      onChange={(e) => setGrande(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="grande">
                      Grande
                    </label>
                  </div>
                  <br></br>
                </div>
                <div className="filtroEspecifico">
                  <h4>Etapa</h4>
                  <div className="form-check text-start">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="age"
                      value={true}
                      id="cachorro"
                      onChange={(e) => setCachorro(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="cachorro">
                      Cachorro
                    </label>
                  </div>
                  <div className="form-check text-start">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="age"
                      value={true}
                      id="joven"
                      onChange={(e) => setJoven(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="joven">
                      Joven
                    </label>
                  </div>
                  <div className="form-check text-start">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="age"
                      value={true}
                      id="adulto"
                      onChange={(e) => setAdulto(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="adulto">
                      Adulto
                    </label>
                  </div>
                  <div className="form-check text-start">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="age"
                      value={true}
                      id="anciano"
                      onChange={(e) => setAnciano(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="anciano">
                      Anciano
                    </label>
                  </div>
                  <br></br>
                </div>
                <div className="filtroEspecifico">
                  <h4>Actividad</h4>
                  <div className="form-check text-start">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="lifestyle"
                      value={true}
                      id="tranquilo"
                      onChange={(e) => setMuyTranquilo(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="tranquilo">
                      Muy tranquilo
                    </label>
                  </div>
                  <div className="form-check text-start">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="lifestyle"
                      value={true}
                      id="tranquilo"
                      onChange={(e) => setTranquilo(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="tranquilo">
                      Tranquilo
                    </label>
                  </div>
                  <div className="form-check text-start">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="lifestyle"
                      id="activo"
                      value={true}
                      onChange={(e) => setActivo(e.target.checked)}
                    />

                    <label className="form-check-label" htmlFor="activo">
                      Activo
                    </label>
                  </div>
                  <div className="form-check text-start">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="lifestyle"
                      id="muy activo"
                      value={true}
                      onChange={(e) => setMuyActivo(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="muy activo">
                      Muy activo
                    </label>
                  </div>
                  <br></br>
                </div>
                <button className="btn" data-bs-dismiss="offcanvas" type="submit" id="aplicarFiltros">
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
