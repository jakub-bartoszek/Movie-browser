import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Movies from "./pages/Movies/Movies";
import People from "./pages/People/People";
import { Navigation } from "./components/common/Navigation/Navigation";
import MoviePage from "./pages/MoviePage";
import { Container } from "./components/common/Container/styled";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Container>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie-page" element={<MoviePage />} />
        <Route path="/people" element={<People />} />
        <Route path="/" element={<Navigate to="/movies" />} />
      </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
