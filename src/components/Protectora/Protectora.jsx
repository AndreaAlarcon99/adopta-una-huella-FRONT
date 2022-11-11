import React from 'react'
import { Link } from 'react-router-dom'

const Protectora = ({protectora}) => {
  return (
    <div className="col-8 col-md-3 m-3 m-lg-4" id="cajaAnimal">
      <Link to={"/perfil/" + protectora._id} className="linkInfo">
      <img
        id="fotoAnimal"
        src={protectora.imgUser}
        className="card-img-top "
        alt={protectora.username}
      />
      <div className="card-body">
        <br></br>
        <h4 className="card-title">
            {protectora.username}
        </h4>
        <p className="card-text pt-1 cardDetails">{protectora.ourAnimals.length} resultados</p>
        
          <div className="card-footer text-muted" id="footerCard">
            <span className="text-white text-bold">Más información</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Protectora