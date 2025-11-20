// src/components/Header/styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 1. Container Principal do Header
// Usará cores do tema (ex: BACKGROUND_900) e layout responsivo (Flexbox/Grid)
export const Container = styled.header`
    width: 100%;
    height: 0px;
    
   
    
    padding: 0 40px;
    
    // Aplicando cor de fundo do tema
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; 
    
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`;

// 2. Estilo para o Logotipo ou Título
export const Logo = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
    // Aplicando cor principal do tema
    color: ${({ theme }) => theme.COLORS["color-primary"]}; 
`;

// 3. Estilo para a Navegação (Menu)
export const Nav = styled.nav`
    display: flex;
    gap: 30px;
    align-items: center;
`;

// 4. Estilo para o Link de Navegação (usando o componente Link do router)
// A biblioteca styled() pode ser usada para estilizar qualquer componente React, 
// como o Link do React Router.
export const NavLink = styled(Link)`
    // Garante que a cor do texto use o tema 
    color: ${({ theme }) => theme.COLORS["color-text-title"]}; 
    text-decoration: none; // Remover o underline dos links (regra global) 
    transition: filter 0.2s; // Transições suaves (regra global) 

    &:hover {
        // Aplica o efeito de filtro/brilho definido globalmente 
        filter: brightness(0.9); 
    }
`;

// Se você tiver um ícone de Usuário, Botão de Login, etc.
export const UserInfo = styled.div`
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;