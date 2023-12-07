import styled from "styled-components";
import { ReactComponent as Paperplane } from "../../assets/icons/noresult/paperplane.svg";

export const Container = styled.div`
 display: flex;
 justify-content: center;
`;

export const Content = styled.div`
 margin-top: 0;
 display: flex;
 justify-content: center;
`;

export const Image = styled(Paperplane)`
 width: 100%;
 height: 100%;
`;
