import React from 'react'
import { useNavigate } from 'react-router-dom'
import animalService from '../../services/animal.service'

const DeleteAnimal = ({animal}) => {

  const {_id, creator } = animal
  const navigate = useNavigate()

  const deleteHandler = animal => {
  animalService.deleteAnimal(_id)
  .then(console.log(`Has eliminado a ${animal.animalName}`))
  .then(navigate(`/perfil/${creator}`))
  .catch(err => console.log(err))
  
  }
  return (
    <div className="container text-end m-1">
      <button className='btn btn-danger w-25' onClick={deleteHandler}>Eliminar</button>
    </div>
  )
}

export default DeleteAnimal