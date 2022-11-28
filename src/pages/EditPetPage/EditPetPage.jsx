import { useEffect, useState } from "react";
import animalService from "../../services/animal.service";
import { useParams, useNavigate } from "react-router-dom";
import "./EditPetPage.css";
import Adoptado from "./components/Adoptado";
import NombreAnimal from "./components/NombreAnimal";
import Descripcion from "./components/Descripcion";
import Ubicacion from "./components/Ubicacion";
import TipoDeAnimal from "./components/TipoDeAnimal";
import Peso from "./components/Peso";
import Etapa from "./components/Etapa";
import Tamano from "./components/Tamano";
import Nacimiento from "./components/Nacimiento";
import Genero from "./components/Genero";
import LifeStyle from "./components/LifeStyle";
import Castrado from "./components/Castrado";
import Vacunado from "./components/Vacunado";
import Microchip from "./components/Microchip";

function EditPetPage() {
  
  const { animalId } = useParams();
  const navigate = useNavigate();
  
  const [ animal, setAnimal ] = useState({})
  
  const [ animalName, setAnimalName ] = useState(animal.animalName);
  const [ adopted, setAdopted ] = useState(animal.adopted);
  const [ castrated, setCastrated ] = useState(animal.castrated);
  const [ description, setDescription ] = useState(animal.description);
  const [ age, setAge ] = useState(animal.age);
  const [ gender, setGender ] = useState(animal.gender);
  const [ lifestyle, setLifestyle ] = useState(animal.lifestyle);
  const [ microchip, setMicrochip ] = useState(animal.microchip);
  const [ birthday, setBirthday ] = useState(animal.birthday);
  const [ weight, setWeight ] = useState(animal.weight);
  const [ location, setLocation ] = useState(animal.location);
  const [ vaccines, setVaccines ] = useState(animal.vaccines);
  const [ size, setSize ] = useState(animal.size);
  const [ animalType, setAnimalType ] = useState(animal.animalType);

  const handlerAnimalName = valor => setAnimalName(valor);
  const handlerAdopted = valor => setAdopted(valor);
  const handlerCastrated = valor => setCastrated(valor);
  const handlerDescription = valor => setDescription(valor);
  const handlerAge = valor => setAge(valor);
  const handlerGender = valor => setGender(valor);
  const handlerLifestyle = valor => setLifestyle(valor);
  const handlerMicrochip = valor => setMicrochip(valor);
  const handlerBirthday = valor => setBirthday(valor);
  const handlerWeight = valor => setWeight(valor);
  const handlerLocation = valor => setLocation(valor);
  const handlerVaccines = valor => setVaccines(valor);
  const handlerSize = valor => setSize(valor);
  const handlerAnimalType = valor => setAnimalType(valor);

  useEffect(() => {
    animalService
      .getAnimal(animalId)
      .then(response => setAnimal(response.data))
      .catch(error => console.log("Error en getAnimal ", error));
  }, [animalId]);

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedAnimal = {
      animalName, adopted, castrated, description,
      age, gender, animalType, lifestyle, microchip,
      birthday, weight, location, vaccines, size
    }
    animalService
      .editAnimal(updatedAnimal, animalId)
      .then(() => navigate("/animales"))
      .catch(error => console.log("Error en editAnimal ", error, updatedAnimal));
  };

  const deleteHandler = () => {
    animalService
      .deleteAnimal(animalId)
      .then(() => navigate("/animales"))
      .catch(error => console.log("Error en deleteAnimal ", error));
  };

  return (
    <div id="formEdit">
      <div>
        <img className="rounded-circle" src={animal.imgAnimal} alt="perro" />
      </div>
      <div>
        <form id="divEdit" className="container" onSubmit={submitHandler}>
          <h2>Editar datos de {animal.animalName}</h2>
          <Adoptado handlerAdopted={handlerAdopted} />
          <NombreAnimal animal={animal} handlerAnimalName={handlerAnimalName} />
          <Descripcion animal={animal} handlerDescription={handlerDescription} />
          <Ubicacion animal={animal} handlerLocation={handlerLocation} />
          <Genero handlerGender={handlerGender} />
          <Nacimiento animal={animal} handlerBirthday={handlerBirthday} />
          <TipoDeAnimal handlerAnimalType={handlerAnimalType} />
          <Peso animal={animal} handlerWeight={handlerWeight} />
          <Etapa handlerAge={handlerAge} />
          <Tamano handlerSize={handlerSize} />
          <LifeStyle handlerLifestyle={handlerLifestyle} />
          <Castrado handlerCastrated={handlerCastrated} />
          <Vacunado handlerVaccines={handlerVaccines} />
          <Microchip handlerMicrochip={handlerMicrochip} />         

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
