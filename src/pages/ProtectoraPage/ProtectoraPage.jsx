import React from "react";
import userService from "../../services/user.service";
import { useState, useEffect } from "react";
import Protectora from "../../components/Protectora/Protectora";
import Loading from "../../components/Loading/Loading";

const ProtectoraPage = () => {
  const [protectoras, setProtectoras] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    userService
      .getUsers()
      .then((results) => {
        setProtectoras(results.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2 className="mb-3">
        {protectoras.length} centros de adopción colaboran con nosotros
      </h2>
      <div className="container">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="row justify-content-center">
            {protectoras.map((protectora) => (
              <Protectora protectora={protectora} key={protectora._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProtectoraPage;
