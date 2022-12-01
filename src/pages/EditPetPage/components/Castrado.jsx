import React from 'react'

const Castrado = ({handlerCastrated}) => {
  return (
    <div className="mb-3">
            <p>¿Está castrado?</p>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              onChange={(e) => handlerCastrated(e.target.value)}
            >
              <option value={true}>Sí</option>
              <option value={false}>No</option>
            </select>
          </div>
  )
}

export default Castrado