import { useNavigate } from "react-router-dom";
import { useState } from "react";
import animalService from "../../services/animal.service";

function AddPet() {
  const [form, setForm] = useState({
    animalName: "",
    imgAnimal: "",
    description: "",
    gender: "",
    birthday: "",
    animalType: "",
    animalBreed: "",
    weight: "",
    age: "",
    castrated: "",
    vaccines: "",
    size: "",
    lifestyle: "",
    illness: "",
    microchip: "",
    location: "",
  });

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const newPet = {
      animalName: form.animalName,
      imgAnimal: form.imgAnimal,
      description: form.description,
      gender: form.gender,
      birthday: form.birthday,
      animalType: form.animalType,
      animalBreed: form.animalBreed,
      weight: form.weight,
      age: form.age,
      castrated: form.castrated,
      vaccines: form.vaccines,
      size: form.size,
      lifestyle: form.lifestyle,
      illness: form.illness,
      microchip: form.microchip,
      location: form.location,
    };
    animalService
      .addAnimal(newPet)
      .then((results) => {
        navigate("/animales" + results.data._id);
      })
      .catch((err) => {
        // navigate("/error");
      });
  };

  const handleName = (e) => {
    const copiaForm = { ...form };
    copiaForm.animalName = e.target.value;
    setForm(copiaForm);
  };

  const handleImage = (e) => {
    const copiaForm = { ...form };
    copiaForm.imgAnimal = e.target.value;
    setForm(copiaForm);
  };

  const handleDescription = (e) => {
    const copiaForm = { ...form };
    copiaForm.description = e.target.value;
    setForm(copiaForm);
  };

  return (
    <div>
      <h1>Añade un animal</h1>
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
            value={form.animalName}
            onChange={handleName}
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
            value={form.imgAnimal}
            onChange={handleImage}
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
            value={form.description}
            onChange={handleDescription}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Subir animal
        </button>
      </form>
    </div>
  );
}

export default AddPet;
