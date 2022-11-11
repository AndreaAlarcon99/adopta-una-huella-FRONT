import React from "react";
import userService from "../../services/user.service";
import { useState, useEffect } from "react";
import Protectora from "../../components/Protectora/Protectora";

const ProtectoraPage = () => {
  const [protectoras, setProtectoras] = useState([]);

  useEffect(() => {
    userService
      .getUsers()
      .then((results) => setProtectoras(results.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2 className="mb-3">
        {" "}
        {protectoras.length} centros de adopción colaboran con nosotros{" "}
      </h2>
      <div className="container">
        <div className="row justify-content-center">
          {protectoras.map((protectora) => (
            <Protectora protectora={protectora} key={protectora._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProtectoraPage;
