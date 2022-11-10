import { useState, useEffect } from "react";
import AnimalComponent from "../../components/Animals/AnimalComponent";
import { useParams } from "react-router-dom";
import userService from "../../services/user.service";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";

function ProfilePage() {
  const [protectora, setProtectora] = useState("");
  const { userId } = useParams();

  const { user, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    userService
      .getUser(userId)
      .then((result) => {
        setProtectora(result.data);
        console.log("result.data: ", result.data);
        console.log('protectora id: ', userId)
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
              src={protectora.imgUser}
              className="img-fluid rounded-start"
              alt="..."
            />

          { isLoggedIn &&
            (user.admin || user._id===protectora._id) && 

            <Link to={"/perfil/" + protectora._id + "/editar"}>
              <img className="penEdit" src="../../penEdit.png" alt="editar"></img>
            </Link>
          }

          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{protectora.username}</h5>
              <p className="card-text">{protectora.description}</p>
              <p className="card-text">
                <small className="text-muted">{protectora.location}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="alinear">
        <div className="row">
          {/* {user.ourAnimals.map((animal) => {
            return <AnimalComponent animal={animal} key={animal._id} />;
          })} */}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
