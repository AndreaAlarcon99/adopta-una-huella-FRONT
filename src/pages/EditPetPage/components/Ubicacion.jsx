import React from 'react'

const Ubicacion = ({animal, handlerLocation}) => {
  return (

    <div className="mb-3">
      <label htmlFor="priceApartment" className="form-label">
        Ubicación del animal:
      </label>
      <input
        type="text"
        className="form-control"
        id="priceApartment"
        value={animal.location}
        onChange={(e) => handlerLocation(e.target.value)}
      />
    </div>
    
  )
}

export default Ubicacion