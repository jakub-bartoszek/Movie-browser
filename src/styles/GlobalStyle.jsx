import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box
  }

  *, ::after, ::before{
    margin: 0;
    box-sizing: inherit
  }

  body{
    font-family: 'Poppins', sans-serif;
    background:${({ theme }) => theme.colors.site.background};
    margin: 0 276px;
  }
`;