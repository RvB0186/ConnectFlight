// src/routes/index.jsx

import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter 
import { AuthRoutes } from './auth.routes'; // Importa as rotas definidas (Passo 3.1)

export function Routes() { // Note que este é o componente Routes (com R maiúsculo)
    return (
        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
    );
}