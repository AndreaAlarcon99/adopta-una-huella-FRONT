import React from 'react'

const EditLocation = ({userToUpdate, handlerLocation}) => {
  return (
    <div className="mb-3">
      <label htmlFor="ubicacion" className="form-label">
        Ubicación de la protectora:
      </label>
      <input
        type="text"
        className="form-control"
        id="ubicacion"
        value={userToUpdate.location}
        onChange={(e) => handlerLocation(e.target.value)}
      />
    </div>
  )
}

export default EditLocation