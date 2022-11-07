import "./AnimalFilters.css";

function AnimalFilters() {
  return (
    <div id="filtrosLateral">
    <h3 className="pt-2">Filtrar</h3>
    <hr></hr>
      <div className="filtroEspecifico">
        <h4>Género</h4>
        <div className="form-check text-start">
          <input
            className="form-check-input"
            type="checkbox"
            value="Macho"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Macho
          </label>
        </div>
        <div className="form-check text-start">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
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
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Pequeño
          </label>
        </div>
        <div className="form-check text-start">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Mediano
          </label>
        </div>
        <div className="form-check text-start">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
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
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Cachorro
          </label>
        </div>
        <div className="form-check text-start">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Joven
          </label>
        </div>
        <div className="form-check text-start">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Adulto
          </label>
        </div>
        <div className="form-check text-start">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
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
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Muy tranquilo
          </label>
        </div>
        <div className="form-check text-start">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Tranquilo
          </label>
        </div>
        <div className="form-check text-start">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Activo
          </label>
        </div>
        <div className="form-check text-start">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Muy activo
          </label>
        </div>
        <br></br>
      </div>
    </div>
  );
}
export default AnimalFilters;
