import { HashRouter, Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList/MovieList";
import People from "./pages/People";
import { Navigation } from "./components/common/Navigation/Navigation";
import MoviePage from "./pages/MoviePage";
import { getMovies } from "./pages/API/moviesAPI";

function App() {
  const movies = getMovies();
  console.log(movies);
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/movie-list" element={<MovieList />} />
        <Route path="/movie-page" element={<MoviePage />} />
        <Route path="/people" element={<People />} />
        <Route path="/" element={<MovieList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
