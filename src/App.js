import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Movies from "./pages/Movies/Movies";
import People from "./pages/People/People";
import { Navigation } from "./components/common/Navigation/Navigation";
import MoviePage from "./pages/MoviePage/MoviePage";
import { toMoviePage, toMovies, toPeople } from "./routes";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path={toMoviePage()} element={<MoviePage />} />
        <Route path={toMovies()} element={<Movies />} />
        <Route path={toPeople()} element={<People />} />
        <Route path="/" element={<Movies />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
