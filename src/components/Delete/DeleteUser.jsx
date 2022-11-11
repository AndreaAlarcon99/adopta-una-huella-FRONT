import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import userService from '../../services/user.service'


const DeleteUser = () => {

    const { userId } = useParams();
    const navigate = useNavigate();
    const deleteHandler = () => {
        userService.deleteUser(userId)
        .then(navigate('/protectoras'))
        .catch(err => console.log(err))
    }
  return (
    <div className="container text-end m-1">
      <button className='btn btn-danger w-25' onClick={deleteHandler}>Eliminar Protectora</button>
    </div>
  )
}

export default DeleteUser