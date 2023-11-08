import { HashRouter, Route, Routes } from "react-router-dom";
import MovieList from "./pages/MovieList";
import People from "./pages/People";
import { Navigation } from "./components/common/Navigation/Navigation";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <MoviePage />
      <Routes>
        <Route path="/movie-list" element={<MovieList />} />
        <Route path="/people" element={<People />} />
        <Route path="/" element={<MovieList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
