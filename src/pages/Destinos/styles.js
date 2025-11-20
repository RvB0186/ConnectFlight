// src/pages/Destinos/styles.js
import styled from 'styled-components';

// Container principal e seção de conteúdo (Estrutura padrão da página)
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 20px;
    min-height: 100vh;
    /* Usa cor de fundo definida no tema */
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800}; 
    color: ${({ theme }) => theme.COLORS["color-text-body"]}; 
`;

export const ContentSection = styled.section`
    width: 100%;
    max-width: 1200px;
    text-align: center;
    margin-top: 40px;
`;

export const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 20px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); 
`;

export const Highlight = styled.span`
    /* Usa cor de destaque do tema */
    color: ${({ theme }) => theme.COLORS["color-primary"]};
    font-weight: bold; 
`;

export const Paragraph = styled.p`
    font-size: 1.1rem;
    margin-bottom: 30px;
    text-align: center;
`;

// -----------------------------------------------------
// Componentes para a Grade de Destinos (Grid Responsivo)
// -----------------------------------------------------

export const DestinationsGrid = styled.div`
    width: 100%;
    /* Define 2 colunas de largura igual (1fr) para telas grandes */
    display: grid; 
    grid-template-columns: repeat(2, 1fr); 
    gap: 30px; /* Espaço entre os cards */
    margin-top: 40px;
    padding: 0 20px;
    
    /* Media Query: em telas menores que 768px, cai para uma única coluna (Responsividade) */
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

export const DestinationCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Usa cor de fundo mais escura (BACKGROUND_900) do tema */
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    overflow: hidden; 
    transition: transform 0.3s;
    
    &:hover {
        transform: translateY(-5px);
    }
`;

export const DestinationImage = styled.img`
    width: 100%;
    height: 200px; 
    object-fit: cover; 
`;

export const DestinationName = styled.p`
    font-size: 1.3rem;
    font-weight: bold; 
    /* Usa a cor de destaque (ORANGE) do tema */
    color: ${({ theme }) => theme.COLORS.ORANGE};
    padding: 15px 10px;
    text-align: center;
    width: 100%;
`;