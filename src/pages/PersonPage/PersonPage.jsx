import { useDispatch, useSelector } from "react-redux";
import { StyledLoader } from "../../components/common/StyledLoader/styled";
import { selectStatus } from "../../utils/redux/peopleSlice";
import { Container } from "../Error/styled";
import { Biography, Image, Name, PersonTile, Wrapper } from "./styled";
import { useParams } from "react-router";
import { useEffect } from "react";
import { fetchPersonDetails } from "../../utils/redux/peopleSlice";



export default function PersonPage() {
   const status = useSelector(selectStatus);
   const dispatch = useDispatch();
   const { id } = useParams();
   const personDetails = useSelector(state => state.people.personDetails);

   useEffect(() => {
      dispatch(fetchPersonDetails(id))
   }, [id, dispatch])


   return (
      <Container>
         {
            {
               loading: <StyledLoader />,
               error: <p>Error!</p>,
               success: (
                  <>
                     <Wrapper>
                        <PersonTile>
                           <Image src={`https://image.tmdb.org/t/p/w500/${personDetails.profile_path}`} alt="" />
                           <Name>{personDetails.name}</Name>
                           <Biography>
                              {personDetails.biography}
                           </Biography>
                        </PersonTile>
                     </Wrapper>

                  </>
               ),
            }[status]
         }
      </Container>
   );
}

