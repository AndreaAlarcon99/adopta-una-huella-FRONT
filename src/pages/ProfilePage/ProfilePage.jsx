// import "./ProfilePage.css";
// import animalService from "../../services/animal.service";
import { useState, useEffect } from "react";
import AnimalComponent from "../../components/Animals/AnimalComponent";
// import { AuthContext } from "../../context/auth.context";
// import { useContext } from "react";
import { useParams } from "react-router-dom";
import userService from "../../services/user.service";

function ProfilePage() {
  const [user, setUser] = useState("");
  const { userId } = useParams();


  //   const [enAdopcion, setEnAdopcion] = useState([]);
  //   const { user } = useContext(AuthContext);
  //   const [protectora, setProtectora] = useState({});
  //   // const { email } = thisUser;

  useEffect(() => {
    userService
      .getUser(userId)
      .then((result) => {
        setUser(result.data);
        console.log("result.data: ", result.data);
      })
      .catch((err) => console.log("error de profile: ", err));
  }, []);

  //   useEffect(() => {
  //     userService
  //       .getUser(userId)
  //       .then((resp) => {
  //         console.log("RESPONSE DATA ", resp.data);
  //         setProtectora(resp.data);
  //       })
  //       // .then(animalService.getAnimalesFiltrados(protectora._id)
  //       //       .then(results => {
  //       //         console.log('animales filtrados', results.data)
  //       //         setEnAdopcion(results.data)
  //       //       }))
  //       .catch((err) => console.log("ERROR CATCH ", err));
  //     // eslint-disable-next-line
  //   }, []);

  //   const [nombreAnon, setNombreAnon] = useState();
  //   const [telefonoAnon, setTelefonoAnon] = useState();
  //   const [emailAnon, setEmailAnon] = useState();
  //   const [mensajeAnon, setMensajeAnon] = useState();


  //   const handlerNombre = ({ target }) => setNombreAnon(target.value);
  //   const handlerTelefono = ({ target }) => setTelefonoAnon(target.value);
  //   const handlerEmail = ({ target }) => setEmailAnon(target.value);
  //   const handlerText = ({ target }) => setMensajeAnon(target.value);

  //   // const handlerSendEmail = () => {
  //   //   const mailData = {
  //   //     email,
  //   //     nombreAnon,
  //   //     telefonoAnon,
  //   //     emailAnon,
  //   //     mensajeAnon,
  //   //   };
  //   //   userService
  //   //     .sendEmail(mailData)
  //   //     .then(console.log("adopción solicitada"))
  //   //     .catch((err) => console.log(err));

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

//   useEffect(() => {
//     userService.getUser(userId)
//     .then(results => {
//       console.log('SOY RESULTS.DATA', results.data)
//       return setUser(results.data)
//     })
//     .then(console.log('SOY EL NUEVO STATE DE USER3 ', user))
//     // animalService.getAnimalesFiltrados({creator: userId})
//     // .then(results => {
//     //   // console.log('GETANIMAL: ' + results.data)
//     //   return setEnAdopcion(results.data)
//     // })
//     .catch(err => console.log(err))
//   })
// }

 
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
    </>

    // <>
    //       <div className="container-fluid mt-5 p-0 w-100" id="cover">
    //         <div className="row">
    //           <div className="col-10 col-md-6 p-0 m-auto">
    //             <img
    //               className="img-fluid imagenUser shadow-lg"
    //               src={protectora.imgUser}
    //               alt={protectora.username}
    //             />
    //           </div>

    //           <div className="col-12 col-md-6 mt-md-5 m-5 m-md-0 text-center">
    //             <div id="containerDescription">
    //               <div>
    //                 <h3> {protectora.username} </h3>
    //                 <p> {protectora.description} </p>
    //                 <button
    //                   type="button"
    //                   className="btn text-white w-25 mx-auto mb-3"
    //                   id="botonUser"
    //                   data-bs-toggle="modal"
    //                   data-bs-target="#exampleModal"
    //                   data-bs-whatever="@getbootstrap"
    //                 >
    //                   Contacto
    //                 </button>
    //               </div>

    //               <div
    //                 className="modal fade"
    //                 id="exampleModal"
    //                 tabIndex="-1"
    //                 aria-labelledby="exampleModalLabel"
    //                 aria-hidden="true"
    //               >
    //                 <div className="modal-dialog">
    //                   <div className="modal-content">
    //                     <div className="modal-header">
    //                       <h1 className="modal-title fs-5" id="exampleModalLabel">
    //                         Contacta con la protectora
    //                       </h1>
    //                       <button
    //                         type="button"
    //                         className="btn-close"
    //                         data-bs-dismiss="modal"
    //                         aria-label="Close"
    //                       ></button>
    //                     </div>
    //                     <div className="modal-body">
    //                       <form>
    //                         <div className="mb-3">
    //                           <label
    //                             htmlFor="recipient-name"
    //                             className="col-form-label"
    //                           >
    //                             Nombre:
    //                           </label>
    //                           <input
    //                             type="text"
    //                             className="form-control"
    //                             id="recipient-name"
    //                             name="nombreAnon"
    //                             onChange={handlerNombre}
    //                           />
    //                         </div>
    //                         <div className="mb-3">
    //                           <label
    //                             htmlFor="recipient-name"
    //                             className="col-form-label"
    //                           >
    //                             Teléfono:
    //                           </label>
    //                           <input
    //                             type="text"
    //                             className="form-control"
    //                             id="recipient-name"
    //                             name="telefonoAnon"
    //                             onChange={handlerTelefono}
    //                           />
    //                         </div>
    //                         <div className="mb-3">
    //                           <label
    //                             htmlFor="recipient-name"
    //                             className="col-form-label"
    //                           >
    //                             email:
    //                           </label>
    //                           <input
    //                             type="text"
    //                             className="form-control"
    //                             id="recipient-name"
    //                             name="emailAnon"
    //                             onChange={handlerEmail}
    //                           />
    //                         </div>
    //                         <div className="mb-3">
    //                           <label
    //                             htmlFor="message-text"
    //                             className="col-form-label"
    //                           >
    //                             Mensaje:
    //                           </label>
    //                           <textarea
    //                             className="form-control"
    //                             id="message-text"
    //                             placeholder="Pregunta a la protectora..."
    //                             name="mensajeAnon"
    //                             onChange={handlerText}
    //                           ></textarea>
    //                         </div>
    //                       </form>
    //                     </div>
    //                     <div className="modal-footer">
    //                       <button
    //                         type="button"
    //                         className="btn"
    //                         id="btSend"
    //                         // onClick={handlerSendEmail}
    //                       >
    //                         Enviar mensaje
    //                       </button>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="col-10 p-0 m-auto">
    //             <div className="row">
    //               {enAdopcion.map((animal) => {
    //                 return (
    //                   <div className="col-4 p-0 m-auto">
    //                     {/* <Link to={ "/animales/" + animal._id + "/editar" }>
    //                       <img className="penEdit" src="../../penEdit.png" alt="editar" />
    //                     </Link> */}
    //                     <AnimalComponent animal={animal} key={animal._id} />
    //                   </div>
    //                 );
    //               })}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </>
  );
}

export default ProfilePage;
