// src/components/Footer/styles.js
import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    /* O position relative é essencial para que o Content (absolute)
       se posicione em relação a este container, e não à página inteira */
    position: relative; 
    
    /* Removemos paddings verticais para que a imagem cole nas bordas */
    padding: 0; 
`;

export const WaveImage = styled.img`
    width: 100%;
    height: auto;
    display: block; /* Remove espaços fantasmas abaixo da imagem */
    
    /* A imagem fica no fluxo normal, ocupando o espaço e definindo a altura do footer */
`;

export const Content = styled.div`
    /* Posicionamento Absoluto para ficar SOBRE a imagem */
    position: absolute;
    bottom: 0; /* Cola no fundo do container */
    left: 0;
    width: 100%;
    
    display: flex;
    justify-content: center; /* Centraliza o texto horizontalmente */
    align-items: center;
    
    /* Ajuste este padding para subir ou descer o texto dentro da onda */
    padding-bottom: 20px; 

    /* Define a cor do texto para a cor de fundo do tema (ex: branco/claro) */
    p {
        color: ${({ theme }) => theme.COLORS["color-background"]};
        font-size: 15px; /* Ajuste conforme necessário */
        margin: 0;
    }
`;