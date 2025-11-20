// src/pages/Contato/styles.js
import styled from 'styled-components';

// Container principal da página Contato
export const Container = styled.div`
    // Usando variáveis do tema para cor de fundo (ex: BACKGROUND_800)
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800}; 
    color: ${({ theme }) => theme.COLORS.WHITE}; 
    
    padding: 40px;
    min-height: 80vh; 
    
    // Usando Flexbox para layouts responsivos [1]
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

// Título principal
export const Title = styled.h1`
    font-size: 3.5rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    margin-bottom: 30px;
`;
export const Highlight = styled.span`
    color: ${({ theme }) => theme.COLORS.ROXO_BRILHANTE}; 
    font-weight: bold;
    text-shadow: 1px 1px 2px #333; 
`;
// Seção de Conteúdo para agrupamento
export const ContentSection = styled.div`
    width: 100%;
    max-width: 700px;
    text-align: center;
    line-height: 1.6;

    p {
        color: ${({ theme }) => theme.COLORS. AZUL_ARROXEADO};
        margin-bottom: 20px;
        
    }
`;

// Informações de contato (exemplo)
export const ContactInfo = styled.div`
    margin-top: 30px;
    padding: 20px;
    border-top: 1px solid ${({ theme }) => theme.COLORS. AZUL_ARROXEADO};
    
    p {
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS. AZUL_ARROXEADO};
    }
`;