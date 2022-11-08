import "./AnimalTypeFilter.css";

function AnimalTypeFilter() {
  return (
    <div id="filtroCategoria">
      <div className=" rounded-pill filtroAnimal">
        <img src="../../../perroSilueta1.png" alt="perro" />
        <p> Perros</p>
      </div>

      <div className=" rounded-pill filtroAnimal" id="imgGato">
        <img src="../../../siluetaGato.png" alt="gato" />
        <p>Gatos</p>
      </div>
      <div className=" rounded-pill filtroAnimal">
        <img src="../../../siluetaConejo1.png" alt="exotico" />
        <p>Exóticos</p>
      </div>
    </div>
  );
}

export default AnimalTypeFilter;
