import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Movies from "./pages/Movies/Movies";
import People from "./pages/People/People";
import { Navigation } from "./components/common/Navigation/Navigation";
import MoviePage from "./pages/MoviePage/MoviePage";
import { toMoviePage, toMovies, toPeople, toPersonPage } from "./routes";
import { Container } from "./components/common/Container/styled";
import PersonPage from "./pages/PersonPage/PersonPage";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Container>
        <Routes>
          <Route path={toMoviePage()} element={<MoviePage />} />
          <Route path={toMovies()} element={<Movies />} />
          <Route path={toPeople()} element={<People />} />
          <Route path="/" element={<Navigate to="/movies" />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
