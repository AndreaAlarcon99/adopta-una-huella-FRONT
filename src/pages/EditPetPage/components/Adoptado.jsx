import React from 'react'


const Adoptado = ({handlerAdopted}) => {
  return (
    <div className="mb-3">
            <p>¿Este animal ha sido adoptado?</p>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              onChange={(e) => handlerAdopted(e.target.value)}
            >
              <option value={true}>Sí</option>
              <option value={false}>No</option>
            </select>
          </div>
  )
}

export default Adoptado