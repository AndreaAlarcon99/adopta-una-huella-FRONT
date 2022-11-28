import React from 'react'

const Peso = ({animal, handlerWeight}) => {
  return (
    <div className="mb-3">
            <label htmlFor="priceApartment" className="form-label">
              Peso
            </label>
            <input
              type="number"
              className="form-control"
              id="priceApartment"
              value={animal.weight}
              onChange={(e) => handlerWeight(e.target.value)}
            />
          </div>
  )
}

export default Peso