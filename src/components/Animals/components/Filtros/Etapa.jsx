import React from 'react'
import { useState } from 'react';

const Etapa = ({valoresFiltro}) => {

    const [cachorro, setCachorro] = useState(false);
    const [joven, setJoven] = useState(false);
    const [adulto, setAdulto] = useState(false);
    const [anciano, setAnciano] = useState(false);

    if (cachorro) valoresFiltro.age.push("Cachorro");
    if (joven) valoresFiltro.age.push("Joven");
    if (adulto) valoresFiltro.age.push("Adulto");
    if (anciano) valoresFiltro.age.push("Anciano");

  return (
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
  )
}

export default Etapa