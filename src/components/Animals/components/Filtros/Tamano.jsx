import React from 'react'
import { useState } from 'react';

const Tamano = ({valoresFiltro}) => {

    const [pequeno, setPequeno] = useState(false);
    const [mediano, setMediano] = useState(false);
    const [grande, setGrande] = useState(false);

    if (pequeno) valoresFiltro.size.push("Pequeño");
    if (mediano) valoresFiltro.size.push("Mediano");
    if (grande) valoresFiltro.size.push("Grande");

  return (
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
  )
}

export default Tamano