import styled, { keyframes } from "styled-components";
import { ReactComponent as Loader } from "../../assets/icons/loader/loader.svg";

export const Image = styled(Loader)`
  align-self: center;
  width: 91px;
  height: 91px;
  animation: spiner 0.7s linear infinite;

  @keyframes spiner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
