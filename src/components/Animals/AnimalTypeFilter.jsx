import "./AnimalTypeFilter.css";
import { useState } from "react";
import animalService from "../../services/animal.service";

function AnimalTypeFilter({ updateAnimals }) {
  const [perros, setPerros] = useState(false);
  const [gatos, setGatos] = useState(false);
  const [exoticos, setExoticos] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const valoresFiltro = {
      animalType: [],
    };

    if (perros) valoresFiltro.animalType.push("Perro");
    if (gatos) valoresFiltro.animalType.push("Gato");
    if (exoticos) valoresFiltro.animalType.push("Exótico");

    animalService
      .getAnimals(valoresFiltro)
      .then((result) => {
        return updateAnimals(result.data);
        // console.log("que es resultado?: ", result.data);
      })
      .catch((err) => {
        console.log("Erros: ", err);
      });
  };

  return (
    <div id="filtroCategoria">
      <form onSubmit={submitHandler}>
        <button
          className="btn"
          type="submit"
          value={true}
          onClick={(e) => setPerros(e.target.value)}
        >
          Perros
        </button>
        <button
          className="btn"
          type="submit"
          value={true}
          onClick={(e) => setGatos(e.target.value)}
        >
          Gatos
        </button>
        <button
          className="btn"
          type="submit"
          value={true}
          onClick={(e) => setExoticos(e.target.value)}
        >
          Exóticos
        </button>

        {/* <button className="btn" type="submit" id="filtros">
          Aplicar filtros
        </button> */}
      </form>
    </div>
  );
}

export default AnimalTypeFilter;
