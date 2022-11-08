import { useNavigate } from "react-router-dom";
import { useState } from "react";
import animalService from "../../services/animal.service";
import "./AddPet.css";

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
  const [castrated, setCastrated] = useState(false);
  const [vaccines, setVaccines] = useState(false);
  const [size, setSize] = useState("");
  const [lifestyle, setLifestyle] = useState("");
  const [microchip, setMicrochip] = useState(false);
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const uploadData = new FormData();
    uploadData.append("imgAnimal", imgAnimal);
    uploadData.append("animalName", animalName);
    uploadData.append("description", description);
    uploadData.append("gender", gender);
    uploadData.append("birthday", birthday);
    uploadData.append("animalType", animalType);
    uploadData.append("weight", weight);
    uploadData.append("age", age);
    uploadData.append("castrated", castrated);
    uploadData.append("vaccines", vaccines);
    uploadData.append("size", size);
    uploadData.append("lifestyle", lifestyle);
    uploadData.append("microchip", microchip);
    uploadData.append("location", location);

    animalService
      .addAnimal(uploadData)
      .then((results) => {
        navigate("/animales");
      })
      .catch((error) => {
        const errorDescription = error.results;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <h1>Añade un animal</h1>
      <form className="container" onSubmit={submitHandler} enctype="multipart/form-data">
        <select
          className="form-select mb-3"
          aria-label="Default select example"
          value={animalType}
          onChange={(e) => setAnimalType(e.target.value)}
        >
          <option selected>Tipo de animal</option>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
          <option value="Exótico">Exótico</option>
        </select>

        <select
          className="form-select mb-3"
          aria-label="Default select example"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
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
            type="file"
            className="form-control"
            id="floatingInput"
            onChange={(e) => setImgAnimal(e.target.files[0])}
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
            type="Date"
            className="form-control"
            placeholder="Día"
            aria-label="Username"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
        <select
          className="form-select mb-3"
          aria-label="Default select example"
          value={age}
          onChange={(e) => setAge(e.target.value)}
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
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option selected>Tamaño de animal</option>
          <option value="Pequeño">Pequeño</option>
          <option value="Mediano">Mediano</option>
          <option value="Grande">Grande</option>
        </select>
        <select
          className="form-select mb-3"
          aria-label="Default select example"
          value={lifestyle}
          onChange={(e) => setLifestyle(e.target.value)}
        >
          <option selected>Estilo la vida</option>
          <option value="Muy tranquilo">Muy tranquilo</option>
          <option value="Tranquilo">Tranquilo</option>
          <option value="Activo">Activo</option>
          <option value="Muy activo">Muy activo</option>
        </select>

        <div class="form-check" id="checkbox">
          <input
            class="form-check-input"
            type="checkbox"
            value={castrated}
            onChange={(e) => setCastrated((e.target.value = true))}
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Castrado
          </label>
        </div>
        <div class="form-check" id="checkbox">
          <input
            class="form-check-input"
            type="checkbox"
            value={vaccines}
            onChange={(e) => setVaccines((e.target.value = true))}
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Vacunado
          </label>
        </div>
        <div class="form-check" id="checkbox">
          <input
            class="form-check-input"
            type="checkbox"
            value={microchip}
            onChange={(e) => setMicrochip((e.target.value = true))}
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Microchip
          </label>
        </div>
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
