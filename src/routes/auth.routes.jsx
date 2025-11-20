
import { Routes, Route } from 'react-router-dom'; [18]
import { Home } from '../pages/Home/index.jsx'; 
import { Sobre } from '../pages/Sobre/index.jsx';
import { Contato } from '../pages/Contato/index.jsx';
import { Destinos } from '../pages/Destinos/index.jsx';

export function AuthRoutes() {
    return (
        <Routes>
            {/* Rota para a Página Inicial */}
            <Route path="/" element={<Home />} /> [17]
            
            {/* Rotas para as páginas adicionais */}
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/destinos" element={<Destinos />} />

        </Routes>
    );
}