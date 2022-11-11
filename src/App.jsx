import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import InfoAdoptionPage from "./pages/InfoAdoptionPage/InfoAdoptionPage";
import AdoptedPets from "./pages/AdoptedPets/AdoptedPets";
import PetListPage from "./pages/PetListPage/PetListPage";
import AddPet from "./pages/Pets/AddPet";
import PetDetailPage from "./pages/PetDetailPage/PetDetailPage";
import EditPetPage from "./pages/EditPetPage/EditPetPage";
import EditProfilePage from "./pages/EditProfilePage/EditProfilePage";
import Navbar from "./components/Navbar/Navbar";
import IsAnon from "./components/IsAnon/IsAnon";
import ProtectoraPage from "./pages/ProtectoraPage/ProtectoraPage";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/informacion-adopcion" element={<InfoAdoptionPage />} />
        <Route path="/adoptados" element={<AdoptedPets />} />
        <Route path="/animales" element={<PetListPage />} />
        <Route path="/crear-animal" element={<AddPet />} />
        <Route path="/animales/:animalId" element={<PetDetailPage />} />
        <Route path="/animales/:animalId/editar" element={<EditPetPage />} />
        <Route path="/perfil/:userId" element={ <ProfilePage />} />
        <Route path="/perfil/:userId/editar" element={<EditProfilePage />} />
        <Route path="/protectoras" element={<ProtectoraPage />} />

        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>}/>
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>}/>

      </Routes>
    </div>
  );
}

export default App;
