import React from 'react'
import { Link } from 'react-router-dom'

const LinkMasInformacion = ({animal}) => {
  return (
    <Link to={"/animales/" + animal._id} className="linkInfo">
        <div className="card-footer text-muted" id="footerCard">
            <span className="text-white text-bold">Más información</span>
        </div>
    </Link>
  )
}

export default LinkMasInformacion