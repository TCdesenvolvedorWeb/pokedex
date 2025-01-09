import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  html{
    background-color: black;
  }

  body{
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (min-width: 570px ){
      height: 100vh;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Jersey 10' , sans-serif;
    letter-spacing: 2px;
    text-decoration: none;
  }
`;

export { GlobalStyled }