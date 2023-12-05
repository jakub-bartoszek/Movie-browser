import axios from "axios";

export const getMovieCredits = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=feb080419348f9a4826b380f202227f9&language=en-US`,
    {
      headers: {
        accept: "application/json",
      },
    }
  );
  return response.data;
};
