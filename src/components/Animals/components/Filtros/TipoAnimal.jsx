import React from 'react'
import { useState } from "react";

const TipoAnimal = ({valoresFiltro}) => {

    const [perro, setPerro] = useState(false);
    const [gato, setGato] = useState(false);
    const [exotico, setExotico] = useState(false);

    if (perro) valoresFiltro.animalType.push("Perro");
    if (gato) valoresFiltro.animalType.push("Gato");
    if (exotico) valoresFiltro.animalType.push("Exótico");

  return (
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
  )
}

export default TipoAnimal