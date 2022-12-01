import React from 'react'

const Genero = ({handlerGender}) => {
  return (
    <div className="mb-3">
            <p>Género:</p>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              onChange={(e) => handlerGender(e.target.value)}
            >
              <option value="Hembra">Hembra</option>
              <option value="Macho">Macho</option>
            </select>
          </div>
  )
}

export default Genero