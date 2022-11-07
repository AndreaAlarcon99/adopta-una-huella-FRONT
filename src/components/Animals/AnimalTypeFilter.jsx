import "./AnimalTypeFilter.css";

function AnimalTypeFilter() {
  return (
    <div id="filtroCategoria">
      <div className=" rounded-pill filtroAnimal">
        <img src="../../../iconoperro.png" alt="perro" />
        <p> Perros</p>
      </div>

      <div className=" rounded-pill filtroAnimal">
        <img src="../../../iconogato.png" alt="perro" />
        <p>Gatos</p>
      </div>
      <div className=" rounded-pill filtroAnimal">
        <img src="../../../iconoexo.png" alt="perro" />
        <p>Exóticos</p>
      </div>
    </div>
  );
}

export default AnimalTypeFilter;
