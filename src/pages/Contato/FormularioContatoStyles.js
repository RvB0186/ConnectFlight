// src/pages/Contato/FormularioContatoStyles.js
import styled from 'styled-components'; 

// 1. Container Principal do Formulário
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 500px;
    padding: 30px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

// 2. Componente de Label
export const Label = styled.label`
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    margin-bottom: -10px;
`;

// 3. Componente de Input e TextArea (Estilo Unificado)
const InputBase = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-size: 1rem;
`;

// Input simples (para nome, email, etc.)
export const Input = styled(InputBase).attrs({ 
    type: 'text' 
})``;

// Área de texto (para a mensagem)
export const TextArea = styled(InputBase).attrs({ 
    as: 'textarea' 
})`
    resize: vertical;
    min-height: 100px;
`;

// 4. Componente de Botão de Envio
export const SubmitButton = styled.button`
    padding: 12px 20px;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    transition: filter 0.2s;
    
    &:hover {
        filter: brightness(0.9);
    }
`;