import { useState, useEffect, useContext } from "react";
import AnimalComponent from "../../components/Animals/AnimalComponent";
import { useParams } from "react-router-dom";
import userService from "../../services/user.service";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

function ProfilePage() {
  const [protectora, setProtectora] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useParams();

  const { user, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    userService
      .getUser(userId)
      .then((result) => {
        setProtectora(result.data);
        setIsLoading(false);
        // console.log("result.data: ", result.data);
      })
      .catch((err) => console.log("error de profile: ", err));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading ? (
        <p>cargando...</p>
      ) : (
        <>
          <div className="card mb-3" style={{ width: "100vw" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={protectora.imgUser}
                  className="img-fluid rounded-start"
                  alt="..."
                />
                {isLoggedIn && (user.admin || user._id === protectora._id) && (
                  <Link to={"/perfil/" + protectora._id + "/editar"}>
                    <img
                      className="penEdit"
                      src="../../penEdit.png"
                      alt="editar"
                    ></img>
                  </Link>
                )}
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
              {protectora.ourAnimals.length === 0 ? (
                <div>
                  <p>Esta protectora no tiene ningún animal en adopción</p>
                </div>
              ) : (
                protectora.ourAnimals.map((animal) => {
                  return <AnimalComponent animal={animal} key={animal._id} />;
                })
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProfilePage;
