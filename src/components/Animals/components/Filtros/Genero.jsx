import React from 'react'
import { useState } from 'react';

const Genero = ({valoresFiltro}) => {

    const [macho, setMacho] = useState(false);
    const [hembra, setHembra] = useState(false);

    if (macho) valoresFiltro.gender.push("Macho");
    if (hembra) valoresFiltro.gender.push("Hembra");

    return (
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
  )
}

export default Genero