import { useNavigate } from "react-router-dom";
import { useState } from "react";
import animalService from "../../services/animal.service";

function AddPet() {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [animalName, setAnimalName] = useState("");
  const [imgAnimal, setImgAnimal] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [castrated, setCastrated] = useState("");
  const [vaccines, setVaccines] = useState("");
  const [size, setSize] = useState("");
  const [lifestyle, setLifestyle] = useState("");
  const [illness, setIllness] = useState("");
  const [microchip, setMicrochip] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const animal = {
      animalName,
      imgAnimal,
      description,
      gender,
      birthday,
      animalType,
      weight,
      age,
      castrated,
      vaccines,
      size,
      lifestyle,
      illness,
      microchip,
      location,
    };

    animalService
      .addAnimal(animal)
      .then((results) => {
        navigate("/animales");

        console.log("QUE ES RESULTS? ", results);
      })
      .catch((error) => {
        const errorDescription = error.results;
        setErrorMessage(errorDescription);
        console.log("ERROR DESDE LA PAGE ADDPET: ", error);
      });
  };

  return (
    <div>
      <h1>Añade un animal</h1>
      <form className="container" onSubmit={submitHandler}>
        <select
          className="form-select mb-3"
          aria-label="Default select example"
        >
          <option selected>Tipo de animal</option>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
          <option value="Exótico">Exótico</option>
        </select>

        <select
          className="form-select mb-3"
          aria-label="Default select example"
        >
          <option selected>Género del animal</option>
          <option value="Hembra">Hembra</option>
          <option value="Macho">Macho</option>
        </select>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder=" "
            value={animalName}
            onChange={(e) => setAnimalName(e.target.value)}
          />
          <label htmlFor="floatingInput">Nombre del animal</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder=" "
            value={imgAnimal}
            onChange={(e) => setImgAnimal(e.target.value)}
          />
          <label htmlFor="floatingInput">Imagen del animal</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder=" "
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="floatingInput">Ubicación del animal</label>
        </div>
        <div className="input-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Día"
            aria-label="Username"
            value={birthday.dia}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <span className="input-group-text">/</span>
          <input
            type="number"
            className="form-control"
            placeholder="Mes"
            aria-label="Mes"
            value={birthday.mes}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <span className="input-group-text">/</span>
          <input
            type="number"
            className="form-control"
            placeholder="Año"
            aria-label="Año"
            value={birthday.año}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
        <select
          className="form-select mb-3"
          aria-label="Default select example"
        >
          <option selected>Etapa de la vida</option>
          <option value="Cachorro">Cachorro</option>
          <option value="Joven">Joven</option>
          <option value="Adulto">Adulto</option>
          <option value="Anciano">Anciano</option>
        </select>
        <div className="form-floating input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder=" "
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label htmlFor="floatingInput">Peso del animal</label>
          <span className="input-group-text">kg</span>
        </div>
        <select
          className="form-select mb-3"
          aria-label="Default select example"
        >
          <option selected>Tamaño de animal</option>
          <option
            value={animalType === "Pequeño"}
            onChange={(e) => setAnimalType(e.target.value)}
          >
            Pequeño
          </option>
          <option value="Mediano">Mediano</option>
          <option value="Grande">Grande</option>
        </select>
        <select
          className="form-select mb-3"
          aria-label="Default select example"
        >
          <option selected>Estilo la vida</option>
          <option value="Muy tranquilo">Muy tranquilo</option>
          <option value="Tranquilo">Tranquilo</option>
          <option value="Activo">Activo</option>
          <option value="Muy activo">Muy activo</option>
        </select>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ height: "100px" }}
          ></textarea>
          <label htmlFor="floatingTextarea2">Descripción</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Subir animal
        </button>
      </form>
    </div>
  );
}

export default AddPet;
