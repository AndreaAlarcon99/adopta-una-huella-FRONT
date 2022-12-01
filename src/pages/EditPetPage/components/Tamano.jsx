import React from 'react'
import { useState } from 'react';

const Tamano = ({handlerSize}) => {
  return (
    <div className="mb-3">
            <p>Tamaño:</p>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              onChange={(e) => handlerSize(e.target.value)}
            >
              <option value="Pequeño">Pequeño</option>
              <option value="Mediano">Mediano</option>
              <option value="Grande">Grande</option>
            </select>
          </div>
  )
}

export default Tamano