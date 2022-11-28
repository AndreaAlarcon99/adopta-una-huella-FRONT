import React from 'react'
import { useState } from 'react';

const Actividad = ({valoresFiltro}) => {

    const [muyTranquilo, setMuyTranquilo] = useState(false);
    const [tranquilo, setTranquilo] = useState(false);
    const [activo, setActivo] = useState(false);
    const [muyActivo, setMuyActivo] = useState(false);
    
    if (muyTranquilo) valoresFiltro.lifestyle.push("Muy tranquilo");
    if (tranquilo) valoresFiltro.lifestyle.push("Tranquilo");
    if (activo) valoresFiltro.lifestyle.push("Activo");
    if (muyActivo) valoresFiltro.lifestyle.push("Muy activo");

  return (
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
  )
}

export default Actividad