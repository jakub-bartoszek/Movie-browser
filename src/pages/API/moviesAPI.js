import axios from "axios";

const moviesAPIbaseURL = "https://api.themoviedb.org";
const API_KEY = "api_key=3d8238b58706bd9f3bd90b6575f249e7";

export const getMovies = () => {
  axios
    .get(`${moviesAPIbaseURL}/3/movie/11?${API_KEY}`)
    .then((response) => console.log(response.data));
};
