import { HashRouter, Route, Routes } from "react-router-dom";
import MovieList from "./pages/MovieList";
import { Navigation } from "./components/common/Navigation/Navigation";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <MoviePage />
      <Routes>
        <Route path="/" element={<MovieList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
