import { HashRouter, Route, Routes } from "react-router-dom";
import MovieList from "./pages/MovieList";
import { Navigation } from "./components/common/Navigation/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Routes>
        <Route path="/movie-list" element={<MovieList/>}/>
        <Route path="/" element={<MovieList/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
