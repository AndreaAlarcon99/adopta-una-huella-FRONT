import React from 'react'

const TipoDeAnimal = ({handlerAnimalType}) => {
  return (
    <div className="mb-3">
            <p>Tipo de animal:</p>

            <select
              className="form-select mb-3"
              aria-label="Default select example"
              onChange={(e) => handlerAnimalType(e.target.value)}
            >
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
              <option value="Exótico">Exótico</option>
            </select>
    </div>
  )
}

export default TipoDeAnimal