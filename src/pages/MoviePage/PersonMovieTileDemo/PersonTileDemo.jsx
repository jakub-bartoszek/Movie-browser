import { StyledPictureIcon } from "../../../components/common/Tile/SmallTile/styled";
import { Image, ImageWrapper, Character, Name, Wrapper } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { fetchMovieDetails } from "../../../utils/redux/moviesSlice";


export const PersonTileDemo = () => {


   const { id } = useParams();
   const dispatch = useDispatch();
   const credits = useSelector(state => state.movies.movieDetails.cast);

   useEffect(() => {
      dispatch(fetchMovieDetails(id));
   }, [dispatch, id]);

   const actor = credits || [];
   console.log('Credits in PersonTileDemo:', actor);

   return (
      <Wrapper>
         <ImageWrapper>
            {actor && actor.profile_path ? (
               <img
                  src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                  alt={`Zdjęcie ${actor.name}`}
               />
            ) : (
               <StyledPictureIcon />
            )}
         </ImageWrapper>
         <Character>
            <Name>{actor ? actor.name : "Nie znaleziono"}</Name>
         </Character>
      </Wrapper>
   );
};

export default PersonTileDemo;