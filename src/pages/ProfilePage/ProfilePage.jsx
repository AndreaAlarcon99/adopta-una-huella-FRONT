import { useState, useEffect } from "react";
import AnimalComponent from "../../components/Animals/AnimalComponent";
import { useParams } from "react-router-dom";
import userService from "../../services/user.service";

function ProfilePage() {
  const [user, setUser] = useState("");
  const { userId } = useParams();

  useEffect(() => {
    userService
      .getUser(userId)
      .then((result) => {
        setUser(result.data);
        // console.log("result.data: ", result.data);
      })
      .catch((err) => console.log("error de profile: ", err));
    // eslint-disable-next-line
  }, []);



  //   const [nombreAnon, setNombreAnon] = useState();
  //   const [telefonoAnon, setTelefonoAnon] = useState();
  //   const [emailAnon, setEmailAnon] = useState();
  //   const [mensajeAnon, setMensajeAnon] = useState();


  //   const handlerNombre = ({ target }) => setNombreAnon(target.value);
  //   const handlerTelefono = ({ target }) => setTelefonoAnon(target.value);
  //   const handlerEmail = ({ target }) => setEmailAnon(target.value);
  //   const handlerText = ({ target }) => setMensajeAnon(target.value);

//   const handlerSendEmail = () => {
//     const mailData = {
//       email,
//       nombreAnon,
//       telefonoAnon,
//       emailAnon,
//       mensajeAnon
//     }
//     userService.sendEmail(mailData)
//     .then(console.log('adopción solicitada'))
//     .catch(err =>console.log(err))

  return (
    <>
      <div className="card mb-3" style={{ width: "100vw" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={user.imgUser}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{user.username}</h5>
              <p className="card-text">{user.description}</p>
              <p className="card-text">
                <small className="text-muted">{user.location}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="alinear">
        <div className="row">
          {user.ourAnimals.map((animal) => {
            return <AnimalComponent animal={animal} key={animal._id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
