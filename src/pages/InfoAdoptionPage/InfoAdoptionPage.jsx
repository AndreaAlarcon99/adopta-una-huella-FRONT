import "./InfoAdoptionPage.css";
import Documentacion from "./components/Documentacion";
import Tramite from "./components/Tramite";
import Requisitos from "./components/Requisitos";
import Article from "./components/Article";
import Proceso from './components/Proceso';


function InfoAdoptionPage() {
  return (
    <div id="divGeneral">
      <div id="titulo">
        <h1>Cómo funcionan las adopciones</h1>
      </div>
      <header className="h-25 h-md-75">
        <img src="../../../perro-gato.png" alt="logo" />
      </header>
      <Proceso />
      <div className="py-1 py-md-2 container-fluid">
      <Article />
        <div className="py-1 py-md-0 container-fluid" id="desplegables">
          <Requisitos />
          <Tramite />
          <Documentacion />
        </div>
      </div>
    </div>
  );
}

export default InfoAdoptionPage;
