import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import InfoAdoptionPage from "./pages/InfoAdoptionPage/InfoAdoptionPage";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import AdoptedPets from "./pages/AdoptedPets/AdoptedPets";
import PetListPage from "./pages/PetListPage/PetListPage";
import AddPet from "./pages/Pets/AddPet";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/informacion-adopcion" element={<InfoAdoptionPage />} />
        <Route path="/adoptados" element={<AdoptedPets />} />
        <Route path="/animales" element={<PetListPage />} />
        <Route path="/añadir-animal" element={<AddPet />} />

        <Route
          path="/profile"
          element={
            // <IsPrivate>
              <ProfilePage />
            // </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
