import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
  }

  *, ::after, ::before{
    margin: 0;
    box-sizing: inherit;
  }

  body{
    font-family: 'Poppins', sans-serif;
<<<<<<< HEAD
    background:${({ theme }) => theme.colors.site.background};
    margin: 0 276px;
=======
    background-color: ${({ theme }) => theme.colors.site.background};
>>>>>>> 6aa77df65c5751e71f48388f4d33b41188be0c1c
  }
`;
