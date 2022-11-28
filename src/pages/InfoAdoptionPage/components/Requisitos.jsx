import React from 'react'

const Requisitos = () => {
  return (
    <div><div className="row" id="lista">
    <p>
      <a
        className="btn text-start"
        data-bs-toggle="collapse"
        href="#collapseExample1"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample1"
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
        Requisitos
      </a>
    </p>
    <div className="collapse" id="collapseExample1">
      <div className="card card-body text-start" id="info">
        <ul>
          <li>Ser mayor de edad.</li>
          <li>Aportar DNI o equivalente.</li>
          <li>
            Firmar un documento de adopción aceptando la propiedad del
            animal.
          </li>
          <li>
            Acudir provisto de transportín si se desea adoptar un gato,
            o de correa y collar si se desea adoptar un perro.
          </li>
          <li>
            Identificar con microchip el animal que desee adoptar, salvo
            en el caso de que el animal estuviera identificado
            previamente.
          </li>
          <li>
            Vacunar frente a la rabia a aquellos perros con más de tres
            meses de edad y salvo en el caso de que el animal estuviera
            vacunado previamente.
          </li>
          <li>
            Hacerse cargo de los tratamientos preventivos u obligatorios
            que a partir de este momento necesite su animal.
          </li>
        </ul>
      </div>
    </div>
  </div></div>
  )
}

export default Requisitos