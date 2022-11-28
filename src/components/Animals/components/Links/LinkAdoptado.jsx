import React from 'react'
import { Link } from 'react-router-dom'

const LinkAdoptado = ({animal}) => {
  return (
    <Link to={"/animales/" + animal._id} className="linkInfo">
        <div className="card-footer text-muted" id="footerCardAdopted">
            <span className="text-white text-bold">ADOPTADO</span>
        </div>
    </Link>
  )
}

export default LinkAdoptado