// global.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* --- Reset Básico --- */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    /* Define a fonte limpa. Ajuste se estiver usando uma fonte específica (ex: Poppins) */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
    line-height: 1.5;
    background-color: white;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyles;