import { HashRouter, Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList/MovieList";
import People from "./pages/People";
import { Navigation } from "./components/common/Navigation/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/movie-list" element={<MovieList />} />
        <Route path="/people" element={<People />} />
        <Route path="/" element={<MovieList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
