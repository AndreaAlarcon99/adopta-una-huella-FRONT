import "./ProfilePage.css";
// import animalService from "../../services/animal.service";
import userService from "../../services/user.service";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import animalService from "../../services/animal.service";

function ProfilePage() {
  // const { _id, username, email, imgUser, description, logoUser } = user

  const {userId} = useParams();
  console.log(userId)
  // const [enAdopcion, setEnAdopcion] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    userService.getUser(userId)
    .then(results => {
      // console.log(results)
      // console.log('GETUSER: ' + results.data)
      return setUser(results.data)
    })
    // animalService.getAnimalesFiltrados({creator: userId})
    // .then(results => {
    //   // console.log('GETANIMAL: ' + results.data)
    //   return setEnAdopcion(results.data)
    // })
    .catch(err => console.log(err))
    // eslint-disable-next-line
  }, [])

  return (
    <div className="container mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      {/* <img src="..." className="img-fluid rounded-start" alt="..."> */}
      {user.username}
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default ProfilePage;
