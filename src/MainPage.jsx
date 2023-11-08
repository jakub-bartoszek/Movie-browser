import { Navigation } from "./components/common/Navigation/Navigation";
import MovieList from "./pages/MovieList";
import People from "./pages/People";
import { Routes, Route } from "react-router-dom";
import { Container } from "./styled";

export const MainPage = () => {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/movie-list" element={<MovieList />} />
        <Route path="/people" element={<People />} />
        <Route path="/" element={<MovieList />} />
      </Routes>
    </Container>
  );
};
