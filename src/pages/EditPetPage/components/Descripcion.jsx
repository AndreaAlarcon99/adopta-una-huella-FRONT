import React from 'react'

const Descripcion = ({animal, handlerDescription}) => {
  return (
    <div className="mb-3">
            <label htmlFor="priceApartment" className="form-label">
              Descripción:
            </label>
            <textarea
              className="form-control"
              id="priceApartment"
              value={animal.description}
              onChange={(e) => handlerDescription(e.target.value)}
            ></textarea>
          </div>
  )
}

export default Descripcion