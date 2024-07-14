import { Routes, Route } from "react-router-dom";

import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
