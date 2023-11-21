import styled from "styled-components";
import { ReactComponent as Loader } from "../../../assets/icons/loader/loader.svg";

export const StyledLoader = styled(Loader)`
	margin-top: 120px;
	align-self: center;
	width: 91px;
	height: 91px;
	animation: spiner 0.7s linear infinite;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
		width: 70px;
		height: 70px;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		width: 35px;
		height: 35px;
	}

	@keyframes spiner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
