import React from 'react'

const Vacunado = ({handlerVaccines}) => {
  return (
    <div className="mb-3">
            <p>¿Está vacunado?</p>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              onChange={(e) => handlerVaccines(e.target.value)}
            >
              <option value={true}>Sí</option>
              <option value={false}>No</option>
            </select>
          </div>
  )
}

export default Vacunado