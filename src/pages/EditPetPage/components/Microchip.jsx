import React from 'react'

const Microchip = ({handlerMicrochip}) => {
  return (
    <div className="mb-3">
            <p>¿Tiene microchip?</p>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              onChange={(e) => handlerMicrochip(e.target.value)}
            >
              <option value={true}>Sí</option>
              <option value={false}>No</option>
            </select>
          </div>
  )
}

export default Microchip