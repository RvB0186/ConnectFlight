import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global.js'; // CORRIGIDO: Sem chaves, pois global.js usa 'export default'
import { ThemeProvider } from 'styled-components'; // Importa ThemeProvider [1]
import theme from './styles/theme.js'; // Importa o objeto tema [1, 5]
import { Routes } from './routes'; // Importa o componente de rotas [1, 5]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* O GlobalStyles precisa estar dentro do ThemeProvider [2, 5] */}
    <ThemeProvider theme={theme}>
        <GlobalStyles/> {/* O componente é usado como uma tag JSX [2, 5] */}
        <Routes />
    </ThemeProvider>
  </React.StrictMode>,
);