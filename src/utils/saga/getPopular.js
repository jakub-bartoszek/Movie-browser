import axios from "axios";

export const getPopular = async (category, page) => {
  const response = await axios(
    `https://api.themoviedb.org/3/${category}/popular?page=${page}`,
    {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTNkYzA0NDk2MjU0OTgwZDAxZGE2ZjEyZWNkOGUxZCIsInN1YiI6IjY1NGJiZGEyNDFhNTYxMzM2YzVlZDg2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jjbm7YAkE1x0vuKowvjXJFiE28sDgW1TB_diyZmPKVQ",
      },
    }
  );
  
  return await response.data;
};
