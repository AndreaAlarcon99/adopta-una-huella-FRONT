import React from 'react'
import userService from '../../services/user.service';
import { useState, useEffect } from 'react';
import Protectora from '../../components/Protectora/Protectora';

const ProtectoraPage = () => {

    const [protectoras, setProtectoras] = useState([]);
  
    useEffect(() => {
      userService.getUsers()
      .then(results => setProtectoras(results.data))
      .catch(err => console.log(err))
    }, []);

  return (
    <div >
      <h2 className="mb-3"> Centros de adopción </h2>
      <div className="container" id="alinear">
        <div className="row">
          { protectoras.map(protectora => <Protectora protectora={protectora} key={protectora._id} />) }
        </div>
      </div>
    </div>
  )
}

export default ProtectoraPage