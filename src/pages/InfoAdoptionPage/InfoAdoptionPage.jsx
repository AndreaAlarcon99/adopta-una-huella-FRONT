import "./InfoAdoptionPage.css"

function InfoAdoptionPage() {
  return (
    <div id="divGeneral">
      <div id="titulo">
        <h1>Cómo funcionan las adopciones</h1>
      </div>
      <header>
        <div id="headerImg">
          <img src="../../../perro-gato.png" alt="logo" />
  
        </div>
      </header>

      <div id="procesoGeneral">
        <h3>El proceso</h3>
        <div id="proceso">
          <div >
            <img src="../../../research.png" alt=" " />
            <p>Búsqueda</p>            
          </div>
          <div>
            <img src="../../../telf.png" alt=" " />
            <p>Contacto</p>            
          </div>
          <div>
            <img src="../../../entrevista.png" alt=" " />
            <p>Entrevista</p>            
          </div>
          <div>
            <img src="../../../adopt.png" alt=" " />
            <p>Visita</p>            
          </div>
          <div>
            <img src="../../../visita.png" alt=" " />
            <p>Adopción</p>            
          </div>
        </div>
      </div>
        
      <div className="py-1 py-md-3" id="infoPage">

        <div id="articleId">

          <article>
            <img src="../../../houseAdopt.png" alt=" " />
          <h2>Entrega de animales</h2>
          <p>Los animales se entregan identificados, desparasitados, con las vacunas obligatorias y esterilizados o con el compromiso de esterilización.</p>
        </article>
          <article>
            <img src="../../../huella3.svg" alt=" " />     
            <h2>Microchip</h2> 
            <p>La identificación con microchip es obligatoria en perros, gatos, conejos, hurones y équidos. La vacuna de la rabia es obligatoria en perros mayores de 3 meses.</p>
          </article>
          <article>
            <img src="../../../documentation.png" alt=" " />
            
          <h2>Documentación asociada</h2> 
          <p>Toda la documentación necesaria para realizar la adopción del animal, será proporcionada por el Centro de Protección Animal donde se adopta.</p>
          </article>
        </div>
          
          
        <div className="py-1 py-md-3" id="desplegables">
        {/* REQUISITOS  */}

      <p>
        <a className="btn text-start" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1" id="botonInfoPage">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
      <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
      </svg> Requisitos
        </a>
      </p>
      <div className="collapse" id="collapseExample1">

        <div className="card card-body text-start" id="info">
          <ul>
            <li>Ser mayor de edad.</li>
            <li>Aportar DNI o equivalente.</li>
            <li>Firmar un documento de adopción aceptando la propiedad del animal.</li>
            <li>Acudir provisto de transportín si se desea adoptar un gato, o de correa y collar si se desea adoptar un perro.</li>
            <li>Identificar con microchip el animal que desee adoptar, salvo en el caso de que el animal estuviera identificado previamente.</li>
            <li>Vacunar frente a la rabia a aquellos perros con más de tres meses de edad y salvo en el caso de que el animal estuviera vacunado previamente.</li>
            <li>Hacerse cargo de los tratamientos preventivos u obligatorios que a partir de este momento necesite su animal.</li>
          </ul>
        </div>
      </div>

      {/* CÓMO REALIZAR UN TRÁMITE  */}
      <p>
        <a className="btn text-start" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2" id="botonInfoPage">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
      <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
      </svg> Cómo realizar un trámite
        </a>
      </p>
      <div className="collapse" id="collapseExample2">
        <div className="card card-body text-start" id="info">
          <p>Accediendo a los detalles del animal en el que esté interesado adoptar, tendrá disponible información de contacto del Centro de Protección Animal donde se aloja el animal. Deberá rellenar un formulario con sus datos personales e información adicional que se le pida. El Centro de Protección Animal se pondrá en contacto con usted para concertar una visita.</p>
        </div>
        </div>

         {/* DOCUMENTACION  */}
      <p>
        <a className="btn text-start" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3" id="botonInfoPage">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
      <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
      </svg>  Documentación
        </a>
      </p>
      <div className="collapse" id="collapseExample3">
        <div className="card card-body text-start" id="info">
         <p>DNI, pasaporte o equivalente.</p>
        </div>
          </div>
        </div>
          
</div>
        
    </div>
  );
}

export default InfoAdoptionPage;
