// src/components/Footer/index.jsx
import React from 'react';
import * as S from './styles'; 
import waveImg from '../../assets/wave.png'; 

export function Footer() { 
    return (
        <S.Container>
            {/* A imagem fica no fundo (na camada visual inferior pelo fluxo do DOM) */}
            <S.WaveImage 
                src={waveImg} 
                alt="Onda decorativa" 
            />

            {/* O conteúdo fica "solto" por cima da imagem devido ao position: absolute */}
            <S.Content>
                <p>ConnectFlight © 2024. Todos os direitos reservados.</p>
            </S.Content>
        </S.Container>
    );
}