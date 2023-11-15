import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Movies from "./pages/Movies/Movies";
import People from "./pages/People";
import { Navigation } from "./components/common/Navigation/Navigation";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie-page" element={<MoviePage />} />
        <Route path="/people" element={<People />} />
        <Route path="/" element={<Navigate to="/movies" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
