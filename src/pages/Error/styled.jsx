import styled from "styled-components";
import { ReactComponent as Attention } from "../../assets/icons/attention/attention.svg";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 80vh;
`;

export const Content = styled.div`
 display: inline-flex;
 flex-direction: column;
 align-items: center;
 gap: 24px;
`;

export const Image = styled(Attention)`
 align-self: center;
 width: 120px;
 height: 120px;
`;

export const Header = styled.h1`
 font-size: 36px;
 font-weight: 600;
 line-height: 120%;
 text-align: center;
`;

export const Text = styled.p`
 width: 80%;
 text-align: center;
 font-size: 22px;
 font-style: normal;
 font-weight: 500;
 line-height: 120%;
`;

export const Button = styled(NavLink)`
 display: flex;
 color: ${({ theme }) => theme.colors.navigation.text};
 text-decoration: none;
 align-self: center;
 padding: 16px 24px;
 align-items: center;
 background-color: var(--Blue, #04c);
 border-radius: 5px;
 gap: 10px;
`;
