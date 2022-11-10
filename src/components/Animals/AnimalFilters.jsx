import animalService from "../../services/animal.service";
import "./AnimalFilters.css";
import { useState } from "react";

function AnimalFilters({ updateAnimals }) {
  const [macho, setMacho] = useState(false);
  const [hembra, setHembra] = useState(false);
  const [pequeno, setPequeno] = useState(false);
  const [mediano, setMediano] = useState(false);
  const [grande, setGrande] = useState(false);
  const [cachorro, setCachorro] = useState(false);
  const [joven, setJoven] = useState(false);
  const [adulto, setAdulto] = useState(false);
  const [anciano, setAnciano] = useState(false);
  const [muyTranquilo, setMuyTranquilo] = useState(false);
  const [tranquilo, setTranquilo] = useState(false);
  const [activo, setActivo] = useState(false);
  const [muyActivo, setMuyActivo] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const valoresFiltro = {
      gender: [],
      age: [],
      size: [],
      lifestyle: [],
    };

    if (macho) valoresFiltro.gender.push("Macho");
    if (hembra) valoresFiltro.gender.push("Hembra");
    if (pequeno) valoresFiltro.size.push("Pequeño");
    if (mediano) valoresFiltro.size.push("Mediano");
    if (grande) valoresFiltro.size.push("Grande");
    if (cachorro) valoresFiltro.age.push("Cachorro");
    if (joven) valoresFiltro.age.push("Joven");
    if (adulto) valoresFiltro.age.push("Adulto");
    if (anciano) valoresFiltro.age.push("Anciano");
    if (muyTranquilo) valoresFiltro.lifestyle.push("Muy tranquilo");
    if (tranquilo) valoresFiltro.lifestyle.push("Tranquilo");
    if (activo) valoresFiltro.lifestyle.push("Activo");
    if (muyActivo) valoresFiltro.lifestyle.push("Muy activo");

    animalService
      .getAnimals(valoresFiltro)
      .then((result) => {
        return updateAnimals(result.data);
      })
      .catch((err) => {
        console.log("Erros: ", err);
      });
  };

  return (
      <div id="filtrosLateral">
      <form onSubmit={submitHandler}>
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
        <button className="btn" type="submit" id="aplicarFiltros">
          Aplicar filtros
        </button>
      </form>
    </div>
  );
}
export default AnimalFilters;
