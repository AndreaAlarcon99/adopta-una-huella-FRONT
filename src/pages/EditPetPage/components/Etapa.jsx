import React from 'react'

const Etapa = ({handlerAge}) => {
  return (
    <div className="mb-3">
            <p>Etapa de la vida:</p>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              onChange={(e) => handlerAge(e.target.value)}
            >
              <option value="Cachorro">Cachorro</option>
              <option value="Joven">Joven</option>
              <option value="Adulto">Adulto</option>
              <option value="Anciano">Anciano</option>
            </select>
          </div>
  )
}

export default Etapa