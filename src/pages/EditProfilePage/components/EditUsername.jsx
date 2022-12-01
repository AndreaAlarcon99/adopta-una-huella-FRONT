import React from 'react'

const EditUsername = ({userToUpdate, handlerUsername}) => {
  return (
    <div className="mb-3">
            <label htmlFor="protectora" className="form-label ">
              Nombre de la protectora:
            </label>
            <input
              type="text"
              className="form-control"
              id="protectora"
              aria-describedby="emailHelp"
              value={userToUpdate.username}
              onChange={(e) => handlerUsername(e.target.value)}
            />
          </div>
  )
}

export default EditUsername