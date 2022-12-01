import React from 'react'

const EditEmail = ({userToUpdate, handlerEmail}) => {
  return (
    <div className="mb-3">
        <label htmlFor="email" className="form-label ">
            Email:
        </label>
        <input
            type="text"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={userToUpdate.email}
            onChange={(e) => handlerEmail(e.target.value)}
        />
    </div>
  )
}

export default EditEmail