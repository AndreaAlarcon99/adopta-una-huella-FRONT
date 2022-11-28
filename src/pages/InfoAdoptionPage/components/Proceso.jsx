import React from 'react'

const Proceso = () => {
  return (
    <div>      <div id="procesoGeneral" className="container-fluid">
    <h3>El proceso</h3>
    <div id="proceso" className="row">
      <div className="col-6 col-md-2">
        <img src="../../../research.png" alt=" " />
        <p>Búsqueda</p>
      </div>
      <div className="col-6 col-md-2">
        <img src="../../../telf.png" alt=" " />
        <p>Contacto</p>
      </div>
      <div className="col-6 col-md-2">
        <img src="../../../entrevista.png" alt=" " />
        <p>Entrevista</p>
      </div>
      <div className="col-6 col-md-2">
        <img src="../../../adopt.png" alt=" " />
        <p>Visita</p>
      </div>
      <div className="col-6 col-md-2">
        <img src="../../../visita.png" alt=" " />
        <p>Adopción</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Proceso