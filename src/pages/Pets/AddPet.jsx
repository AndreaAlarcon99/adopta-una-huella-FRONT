import { useContext, useState } from "react";
import animalService from "../../services/animal.service";
import userService from "../../services/user.service";
import "./AddPet.css";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

import { AuthContext } from "../../context/auth.context";

function AddPet() {
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

  const [isLoading, setIsLoading] = useState(false);

  const { user } = useContext(AuthContext);

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
    uploadData.append("creator", user._id);

    setIsLoading(true);

    //relacionamos animal con user.
    let prom1 = animalService.addAnimal(uploadData);
    let prom2 = userService.getUser(user._id);

    Promise.all([prom1, prom2])
      .then((response) => {
        // console.log("response 0:", response[0].data);
        // console.log("response 1:", response[1].data);

        const animalsArr = [
          ...response[1].data.ourAnimals,
          response[0].data._id,
        ];
        //hacemos copia del array ourAnimals para actualizarlo cada vez que creamos un animal nuevo.
        //Le metemos el nuevo id de animal al user en concreto.

        userService
          .editUser({ ourAnimals: animalsArr }, response[1].data._id)
          .then((result) => {
            setIsLoading(false);
            navigate("/animales");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="formCrear">
      <div id="divAddPet">
        <h1>Añade un animal</h1>
        <form
          className="container"
          onSubmit={submitHandler}
          encType="multipart/form-data"
        >
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
          <div className="text-start mt-3" id="fileUpload">
            <h6 className="text-start m-3"> Foto del animal:</h6>
            <input
              className="mb-3 px-4"
              type="file"
              onChange={(e) => setImgAnimal(e.target.files[0])}
            />
            <label htmlFor="subir imagen"></label>
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
              placeholder=" "
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
              type="number"
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

          <div className="form-check" id="checkbox">
            <input
              className="form-check-input"
              type="checkbox"
              value={castrated}
              onChange={(e) => setCastrated((e.target.value = true))}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              ¿Está castrado?
            </label>
          </div>
          <div className="form-check" id="checkbox">
            <input
              className="form-check-input"
              type="checkbox"
              value={vaccines}
              onChange={(e) => setVaccines((e.target.value = true))}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              ¿Está vacunado?
            </label>
          </div>
          <div className="form-check" id="checkbox">
            <input
              className="form-check-input"
              type="checkbox"
              value={microchip}
              onChange={(e) => setMicrochip((e.target.value = true))}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              ¿Tiene microchip?
            </label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder=" "
              id="floatingTextarea2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ height: "100px" }}
            ></textarea>
            <label htmlFor="floatingTextarea2">Descripción del animal</label>
          </div>
          <button type="submit" className="btn" id="btnSignUp2">
            Subir animal
          </button>
          {isLoading ? <Loading /> : <></>}
        </form>
      </div>
    </div>
  );
}

export default AddPet;
