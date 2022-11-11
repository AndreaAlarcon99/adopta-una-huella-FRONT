import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import userService from "../../services/user.service";

const DeleteUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const deleteHandler = () => {
    userService
      .deleteUser(userId)
      .then(navigate("/protectoras"))
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
                onClick={deleteHandler}
                data-bs-dismiss="modal"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <button className="btn btn-danger w-25" onClick={deleteHandler}>
        Eliminar Protectora
      </button> */}
    </div>
  );
};

export default DeleteUser;
