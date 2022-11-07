import { useEffect, useState } from "react";
import animalService from "../../services/animal.service";
import { useParams, useNavigate } from "react-router-dom";
import "./EditPetPage.css";


function EditPetPage(){
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
    const [illness, setIllness] = useState("");
    const [microchip, setMicrochip] = useState("");
    const [location, setLocation] = useState("");

    const { animalId } = useParams();
    const navigate = useNavigate(); 

    useEffect(()=>{
        animalService.getAnimal(animalId)
        .then((response) =>{
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
            setIllness(animalToUpdate.illness);
            setMicrochip(animalToUpdate.microchip);
            setLocation(animalToUpdate.location);
        })
        .catch((error) => console.log("soy error de catch en getAnimal ", error))

    }, [animalId]);

    const submitHandler = (e) =>{
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
            location
        };

        animalService.editAnimal(animal, animalId)
            .then((response)=>{
                navigate("/animales/"+animalId)
            })
            .catch((error) => console.log("soy error de catch en editAnimal ", error, animal))

    }

        const deleteHandler = () =>{
            animalService.deleteAnimal(animalId)
                .then(()=>{
                    navigate("/")
                })
                .catch((error) => console.log("soy error de deleteAnimal ", error))
    }

        

    return(
        <div>
        <h3>SOY EDIT PET PAGE</h3>

        <form className="container" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="animalName" className="form-label">
            Nombre del animal
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
          <label htmlFor="imageApartment" className="form-label">
            Imagen del animal
          </label>
          <input
            type="text"
            className="form-control"
            id="imageApartment"
            value={imgAnimal}
            onChange={(e) => setImgAnimal(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priceApartment" className="form-label">
            Descripción
          </label>
          <input
            type="text"
            className="form-control"
            id="priceApartment"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priceApartment" className="form-label">
            Género
          </label>
          <input
            type="text"
            className="form-control"
            id="priceApartment"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priceApartment" className="form-label">
            Fecha de nacimiento
          </label>
          <input
            type="text"
            className="form-control"
            id="priceApartment"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priceApartment" className="form-label">
            Tipo de animal
          </label>
          <input
            type="text"
            className="form-control"
            id="priceApartment"
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priceApartment" className="form-label">
            Peso
          </label>
          <input
            type="text"
            className="form-control"
            id="priceApartment"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priceApartment" className="form-label">
            Etapa
          </label>
          <input
            type="text"
            className="form-control"
            id="priceApartment"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priceApartment" className="form-label">
            Castrado
          </label>
          <input
            type="text"
            className="form-control"
            id="priceApartment"
            value={castrated}
            onChange={(e) => setCastrated(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priceApartment" className="form-label">
            Vacunado
          </label>
          <input
            type="text"
            className="form-control"
            id="priceApartment"
            value={vaccines}
            onChange={(e) => setVaccines(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priceApartment" className="form-label">
            Tamaño
          </label>
          <input
            type="text"
            className="form-control"
            id="priceApartment"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priceApartment" className="form-label">
            Estilo de vida
          </label>
          <input
            type="text"
            className="form-control"
            id="priceApartment"
            value={lifestyle}
            onChange={(e) => setLifestyle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priceApartment" className="form-label">
            Enfermedades
          </label>
          <input
            type="text"
            className="form-control"
            id="priceApartment"
            value={illness}
            onChange={(e) => setIllness(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priceApartment" className="form-label">
            Microchip
          </label>
          <input
            type="text"
            className="form-control"
            id="priceApartment"
            value={microchip}
            onChange={(e) => setMicrochip(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priceApartment" className="form-label">
            Ubicación
          </label>
          <input
            type="text"
            className="form-control"
            id="priceApartment"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Editar animal
        </button>
        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Eliminar
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Eliminar publicación</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ¿Seguro que quieres eliminar la publicación de este animal?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary" onClick={deleteHandler} data-bs-dismiss="modal">Eliminar</button>
                    </div>
                    </div>
                </div>
                </div>
      </form>
      
      
    </div>
           
    )
}

export default EditPetPage;