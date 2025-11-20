// src/pages/Sobre/styles.js
import styled, { keyframes } from 'styled-components';

// 1. Definição da Animação (Opcional, para deixar o título "animado")
// Cria um pequeno movimento de fade-in e escala, para dar o toque chamativo
const fadeInScale = keyframes`
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

// 2. Container Principal da Página
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800}; /* Usa cor do tema */
    color: ${({ theme }) => theme.COLORS.AZUL_ARROXEADO}; /* Usa cor do tema */
`;

// 3. Seção de Conteúdo (para limitar a largura do texto)
export const ContentSection = styled.section`
    width: 100%;
    max-width: 800px;
    text-align: center;
    line-height: 1.6;
    margin-top: 10px;
    animation: ${fadeInScale} 1.2s ease-out; /* Aplica a animação ao bloco de conteúdo */
`;

// 4. Título Principal da Página
export const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 10px;
    
    
    text-shadow: 2px 2px 4px rgba(130, 130, 130, 0.5); 
    
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

// 5. Componente de Destaque (Highlight) para a palavra/frase chamativa
export const Highlight = styled.span`
    color: ${({ theme }) => theme.COLORS.ROXO_BRILHANTE};
    font-weight: bold; /* Deixa a fonte em negrito [Query] */
    display: block; /* Quebra a linha da frase de destaque */
    margin-top: 10px;
    font-size: 3.5rem;
`;

// 6. Parágrafos de Resumo
export const Paragraph = styled.p`
    font-size: 1.1rem;
    margin-bottom: 15px;
    text-align: justify;
    padding: 0 10px;
`;
// 7. Componente: Imagem
export const AboutImage = styled.img`
    width: 100%; 
    max-width: 500px; /* Limita o tamanho para que não ocupe a tela inteira */
    height: auto;
    
    /* Centralização Horizontal (como é um elemento de bloco) */
    display: block;
    margin: 10px auto 30px auto; 
    
    border-radius: 8px;
    object-fit: cover; /* Garante que a imagem se ajuste bem ao container */

    /* Adiciona uma sombra para destacar a imagem */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); 
`;