import "./ProfilePage.css";
import animalService from "../../services/animal.service";
import { useState, useEffect } from 'react'

function ProfilePage({user}) {

  const { _id, username, email, imgUser, description, logoUser, } = user

  const [enAdopcion, setEnAdopcion] = useState([]);

  useEffect(() => {
    animalService.getAnimals(animal.creator === _id)
    .then(results => setEnAdopcion(results.data))
    .catch(err => next(err))
  }, [])
  


  return (
    <div className='shadow-lg p-3 mb-5 bg-body rounded'>
      <h1>patata</h1>
    </div>
  );
}

export default ProfilePage;
