import React from 'react'
import { useState } from 'react';

const Nacimiento = ({animal, handlerBirthday}) => {
  return (
    <div className="mb-3">
            <label htmlFor="priceApartment" className="form-label">
              Fecha de nacimiento
            </label>
            <input
              type="text"
              className="form-control"
              id="priceApartment"
              value={animal.birthday}
              onChange={(e) => handlerBirthday(e.target.value)}
            />
    </div>
  )
}

export default Nacimiento