import React from 'react'

const NombreAnimal = ({animal, handlerAnimalName}) => {
  return (
    <div className="mb-3">
            <label htmlFor="animalName" className="form-label ">
              Nombre del animal:
            </label>
            <input
              type="text"
              className="form-control"
              id="animalName"
              aria-describedby="emailHelp"
              value={animal.animalName}
              onChange={e => handlerAnimalName(e.target.value)}
            />
    </div>
  )
}

export default NombreAnimal