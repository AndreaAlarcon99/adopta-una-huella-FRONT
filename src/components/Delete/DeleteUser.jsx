import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import userService from "../../services/user.service";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import Loading from "../../components/Loading/Loading";


const DeleteUser = () => {

  const { logOutUser } = useContext(AuthContext);

  const { userId } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  const deleteUserHandler = () => {
    setIsLoading(true);

    userService
      .deleteUser(userId)
      .then(logOutUser)
      .then(setIsLoading(false))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container text-center m-1">
      <button
        type="button"
        className="btn btn-danger "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Eliminar perfil
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Eliminar perfil
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              ¿Seguro que quieres eliminar perfil?
            </div>
            {isLoading ? <Loading /> : <></>}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={deleteUserHandler}
                data-bs-dismiss="modal"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
