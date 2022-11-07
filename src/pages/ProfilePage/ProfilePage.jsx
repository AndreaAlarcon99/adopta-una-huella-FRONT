import "./ProfilePage.css";
// import animalService from "../../services/animal.service";
// import { useState, useEffect } from 'react'

function ProfilePage({ user }) {
  // const { _id, username, email, imgUser, description, logoUser } = user

  // const [enAdopcion, setEnAdopcion] = useState([]);

  // useEffect(() => {

  //   animalService.getAnimals(_id)
  //   .then(results => setEnAdopcion(results.data))
  //   .catch(err => console.log(err))

  // }, [])

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          {/* <img src="..." className="img-fluid rounded-start" alt="..."> */}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Nombre de usuario</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
