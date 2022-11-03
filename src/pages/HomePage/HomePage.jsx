import "./HomePage.css";

function HomePage() {
  return (
    <div>



<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
      <div className="carousel-item active" id="primerSlide">
          <img src="../../../perro.png" alt="perro" />
          <h1>Cómo funcionan las adopciones</h1>            
      </div>
    <div className="carousel-item">
    </div>
    <div className="carousel-item">
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
      </div>
      <h1>Home page Andrea</h1>
      
    </div>
  );
}

export default HomePage;
