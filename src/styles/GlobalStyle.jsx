import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    height: 100vh;
    overflow: hidden;
  }

  #root{
    height: 100%;
    overflow: hidden;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  *, ::after, ::before{
    margin: 0;
    box-sizing: inherit;
  }

  body{
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.site.background};
    height: 100%;
    overflow: hidden;
  }
`;
