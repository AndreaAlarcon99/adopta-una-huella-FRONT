import React from 'react'

const LifeStyle = ({handlerLifestyle}) => {
  return (
    <div className="mb-3">
            <p>Estilo de vida:</p>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              onChange={(e) => handlerLifestyle(e.target.value)}
            >
              <option value="Muy tranquilo">Muy tranquilo</option>
              <option value="Tranquilo">Tranquilo</option>
              <option value="Activo">Activo</option>
              <option value="Muy activo">Muy activo</option>
            </select>
          </div>
  )
}

export default LifeStyle