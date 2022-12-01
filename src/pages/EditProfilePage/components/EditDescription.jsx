import React from 'react'

const EditDescription = ({userToUpdate, handlerDescription}) => {
  return (
    <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">
              Descripción:
            </label>
            <textarea
              className="form-control"
              id="descripcion"
              value={userToUpdate.description}
              onChange={(e) => handlerDescription(e.target.value)}
            ></textarea>
          </div>
  )
}

export default EditDescription