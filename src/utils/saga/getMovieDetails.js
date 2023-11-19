export const getMoviesDetails = (movieId) => {
   const getMovieDetails = fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=feb080419348f9a4826b380f202227f9&language=en-US`
   )
      .then((response) => {
         if (!response.ok) {
            throw new Error(response.statusText);
         }
         return response;
      })
      .then((response) => response.json());

   return getMovieDetails;
};
