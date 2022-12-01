import React from 'react'

const Article = () => {
  return (
    <div>        <div id="articleId" className="row ">
    <article className="col-10  col-md-12 col-lg-3">
      <img src="../../../houseAdopt.png" alt=" " />
      <h3>Entrega de animales</h3>
      <p className="text-start">
        Los animales se entregan identificados, desparasitados, con las
        vacunas obligatorias y esterilizados o con el compromiso de
        esterilización.
      </p>
    </article>
    <article className="col-10 col-md-12 col-lg-3">
      <img src="../../../huella3.svg" alt=" " />
      <h3>Microchip & blablabla</h3>
      <p className="text-start">
        La identificación con microchip es obligatoria en perros, gatos,
        conejos, hurones y équidos. La vacuna de la rabia es obligatoria
        en perros mayores de 3 meses.
      </p>
    </article>
    <article className="col-10 col-md-12 col-lg-3">
      <img src="../../../documentation.png" alt=" " />
      <h3>Documentación asociada</h3>
      <p className="text-start">
        Toda la documentación necesaria para realizar la adopción del
        animal, será proporcionada por el Centro de Protección Animal
        donde se adopta.
      </p>
    </article>
  </div>
</div>
  )
}

export default Article