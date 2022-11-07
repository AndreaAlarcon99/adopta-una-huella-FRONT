import "./AnimalFilters.css";

function AnimalFilters() {
  return (
    <div id="filtrosLateral">
      <div className="filtroEspecifico">
        <h3>Género</h3>
        <div class="form-check text-start">
          <input
            class="form-check-input"
            type="checkbox"
            value="Macho"
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Macho
          </label>
        </div>
        <div class="form-check text-start">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Hembra
          </label>
        </div>
      </div>
      <div className="filtroEspecifico">
        <h3>Tamaño</h3>
        <div class="form-check text-start">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Pequeño
          </label>
        </div>
        <div class="form-check text-start">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Mediano
          </label>
        </div>
        <div class="form-check text-start">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Grande
          </label>
        </div>
      </div>
      <div className="filtroEspecifico">
        <h3>Etapa</h3>
        <div class="form-check text-start">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Cachorro
          </label>
        </div>
        <div class="form-check text-start">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Joven
          </label>
        </div>
        <div class="form-check text-start">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Adulto
          </label>
        </div>
        <div class="form-check text-start">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Anciano
          </label>
        </div>
      </div>
      <div className="filtroEspecifico">
        <h3>Actividad</h3>
        <div class="form-check text-start">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Muy tranquilo
          </label>
        </div>
        <div class="form-check text-start">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Tranquilo
          </label>
        </div>
        <div class="form-check text-start">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Activo
          </label>
        </div>
        <div class="form-check text-start">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Muy activo
          </label>
        </div>
      </div>
    </div>
  );
}
export default AnimalFilters;
