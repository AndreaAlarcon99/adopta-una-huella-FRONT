import React from 'react'

const Tramite = () => {
  return (
    <div><p>
    <a
      className="btn text-start"
      data-bs-toggle="collapse"
      href="#collapseExample2"
      role="button"
      aria-expanded="false"
      aria-controls="collapseExample2"
      id="botonInfoPage"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-caret-down"
        viewBox="0 0 16 16"
      >
        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
      </svg>{" "}
      Cómo realizar un trámite
    </a>
  </p>
  <div className="collapse" id="collapseExample2">
    <div className="card card-body text-start" id="info">
      <p>
        Accediendo a los detalles del animal en el que esté interesado
        adoptar, tendrá disponible información de contacto del Centro de
        Protección Animal donde se aloja el animal. Deberá rellenar un
        formulario con sus datos personales e información adicional que
        se le pida. El Centro de Protección Animal se pondrá en contacto
        con usted para concertar una visita.
      </p>
    </div>
  </div></div>
  )
}

export default Tramite