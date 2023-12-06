export const toMovies = () => "/movies";
export const toPeople = () => "/people";
export const toMoviePage = ({ id } = { id: ":id" }) => `/movies/${id}`;
export const toPersonPage = ({ id } = { id: ":id" }) => `/people/${id}`;