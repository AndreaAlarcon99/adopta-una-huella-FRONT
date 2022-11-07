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
import PetDetailPage from "./pages/PetDetailPage/PetDetailPage";
import EditPetPage from "./pages/EditPetPage/EditPetPage";

function App() {

  const [userId, setUserId] = useState()

  useEffect(() => {
    authService
      .verify()
      .then(resp =>{
        setUserId(resp.data._id)
      })
  }, [])
  

  return (
    <div className="App">
      <Navbar userId={userId} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/informacion-adopcion" element={<InfoAdoptionPage />} />
        <Route path="/adoptados" element={<AdoptedPets />} />

        <Route path="/animales" element={<PetListPage />} />


        <Route path="/crear-animal" element={<AddPet />} />

        <Route path="/animales/:animalId" element={<PetDetailPage />} />
        <Route path="/animales/:animalId/editar" element={<EditPetPage />} />


        <Route
          path="/perfil/:userId"
          element={
            // <IsPrivate>
              <ProfilePage />
            // </IsPrivate>
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
