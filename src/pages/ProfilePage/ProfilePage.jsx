import { useState, useEffect } from "react";
import AnimalComponent from "../../components/Animals/AnimalComponent";
import { useParams } from "react-router-dom";
import userService from "../../services/user.service";
import { Link } from "react-router-dom";

function ProfilePage() {
  const [user, setUser] = useState("");
  const { userId } = useParams();

  useEffect(() => {
    userService
      .getUser(userId)
      .then((result) => {
        setUser(result.data);
      })
      .catch((err) => console.log("error de profile: ", err));
    // eslint-disable-next-line
  }, []);


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

          <Link to={"/perfil/" + user._id + "/editar"}>
              <img
                className="penEdit"
                src="../../penEdit.png"
                alt="editar"
              ></img>
            </Link>

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
