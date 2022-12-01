import React from 'react'

const Documentacion = () => {
  return (
    <div><p>
    <a
      className="btn text-start"
      data-bs-toggle="collapse"
      href="#collapseExample3"
      role="button"
      aria-expanded="false"
      aria-controls="collapseExample3"
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
      Documentación
    </a>
  </p>
  <div className="collapse" id="collapseExample3">
    <div className="card card-body text-start" id="info">
      <p>DNI, pasaporte o equivalente.</p>
    </div>
  </div></div>
  )
}

export default Documentacion