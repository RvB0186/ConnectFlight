// Exemplo: src/pages/Home/styles.js
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const HighlightedWord = styled.span`
    // Acessa a cor HIGHIGHT definida no theme.js
    color: ${ ({ theme }) => theme.COLORS.ROXO_BRILHANTE };
    font-weight: bold;
`;