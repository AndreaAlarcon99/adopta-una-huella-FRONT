import { useEffect, useState } from "react";
import animalService from "../../services/animal.service";
import { useParams, useNavigate } from "react-router-dom";
import "./EditPetPage.css";

function EditPetPage() {
  const [animalName, setAnimalName] = useState("");
  const [imgAnimal, setImgAnimal] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [weight, setWeight] = useState();
  const [age, setAge] = useState("");
  const [castrated, setCastrated] = useState("");
  const [vaccines, setVaccines] = useState("");
  const [size, setSize] = useState("");
  const [lifestyle, setLifestyle] = useState("");
  const [microchip, setMicrochip] = useState("");
  const [location, setLocation] = useState("");
  const [adopted, setAdopted] = useState(false);

  const { animalId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    animalService
      .getAnimal(animalId)
      .then((response) => {
        const animalToUpdate = response.data;
        setAnimalName(animalToUpdate.animalName);
        setImgAnimal(animalToUpdate.imgAnimal);
        setDescription(animalToUpdate.description);
        setGender(animalToUpdate.gender);
        setBirthday(animalToUpdate.birthday);
        setAnimalType(animalToUpdate.animalType);
        setWeight(animalToUpdate.weight);
        setAge(animalToUpdate.age);
        setCastrated(animalToUpdate.castrated);
        setVaccines(animalToUpdate.vaccines);
        setSize(animalToUpdate.size);
        setLifestyle(animalToUpdate.lifestyle);
        setMicrochip(animalToUpdate.microchip);
        setLocation(animalToUpdate.location);
        setAdopted(animalToUpdate.adopted);
      })
      .catch((error) => console.log("Error: ", error));
  }, [animalId]);

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
      microchip,
      location,
      adopted,
    };

    animalService
      .editAnimal(animal, animalId)
      .then((response) => {
        navigate("/animales");
      })
      .catch((error) =>
        console.log("Error: ", error, animal)
      );
  };

  const deleteHandler = () => {
    animalService
      .deleteAnimal(animalId)
      .then(() => {
        navigate("/animales");
      })
      .catch((error) => console.log("Error: ", error));
  };

  return (
    <div id="formEdit">
      <div>
        <img className="rounded-circle" src={imgAnimal} alt="perro" />
      </div>
      <div>
        <form id="divEdit" className="container" onSubmit={submitHandler}>
          <h2>Editar datos de {animalName}</h2>
          <div className="mb-3">
            <p>¿Este animal ha sido adoptado?</p>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              value={adopted}
              onChange={(e) => setAdopted(e.target.value)}
            >
              <option value={true}>Sí</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="animalName" className="form-label ">
              Nombre del animal:
            </label>
            <input
              type="text"
              className="form-control"
              id="animalName"
              aria-describedby="emailHelp"
              value={animalName}
              onChange={(e) => setAnimalName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Descripción:
            </label>
            <textarea
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Ubicación del animal:
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <p>Género:</p>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Hembra">Hembra</option>
              <option value="Macho">Macho</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="birthday" className="form-label">
              Fecha de nacimiento
            </label>
            <input
              type="Date"
              className="form-control"
              id="birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <p>Tipo de animal:</p>

            <select
              className="form-select mb-3"
              aria-label="Default select example"
              value={animalType}
              onChange={(e) => setAnimalType(e.target.value)}
            >
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
              <option value="Exótico">Exótico</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="weight" className="form-label">
              Peso
            </label>
            <input
              type="number"
              className="form-control"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <p>Etapa de la vida:</p>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            >
              <option value="Cachorro">Cachorro</option>
              <option value="Joven">Joven</option>
              <option value="Adulto">Adulto</option>
              <option value="Anciano">Anciano</option>
            </select>
          </div>

          <div className="mb-3">
            <p>Tamaño:</p>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="Pequeño">Pequeño</option>
              <option value="Mediano">Mediano</option>
              <option value="Grande">Grande</option>
            </select>
          </div>
          <div className="mb-3">
            <p>Estilo de vida:</p>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              value={lifestyle}
              onChange={(e) => setLifestyle(e.target.value)}
            >
              <option value="Muy tranquilo">Muy tranquilo</option>
              <option value="Tranquilo">Tranquilo</option>
              <option value="Activo">Activo</option>
              <option value="Muy activo">Muy activo</option>
            </select>
          </div>
          <div className="mb-3">
            <p>¿Está castrado?</p>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              value={castrated}
              onChange={(e) => setCastrated(e.target.value)}
            >
              <option value={true}>Sí</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div className="mb-3">
            <p>¿Está vacunado?</p>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              value={vaccines}
              onChange={(e) => setVaccines(e.target.value)}
            >
              <option value={true}>Sí</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div className="mb-3">
            <p>¿Tiene microchip?</p>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              value={microchip}
              onChange={(e) => setMicrochip(e.target.value)}
            >
              <option value={true}>Sí</option>
              <option value={false}>No</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Editar animal
          </button>
          <button
            type="button"
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Eliminar
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Eliminar publicación
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  ¿Seguro que quieres eliminar la publicación de este animal?
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={deleteHandler}
                    data-bs-dismiss="modal"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPetPage;