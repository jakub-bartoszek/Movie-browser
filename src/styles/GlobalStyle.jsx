import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    height: 100vh;
    scroll-behavior: smooth;
  }

  *, ::after, ::before{
    margin: 0;
    box-sizing: inherit;
  }

  body{
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.site.background};
    height: 100%;
  }

  #root{
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  ::-webkit-scrollbar {
  width: 10px;
  }

  ::-webkit-scrollbar-track {
  background: transparent;
  }

  ::-webkit-scrollbar-thumb {
  background: #555;
  }

  ::-webkit-scrollbar-thumb:hover {
  background: #888;
  }  
`;
