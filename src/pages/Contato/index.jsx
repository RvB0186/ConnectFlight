// src/pages/Contato/index.jsx

import React from 'react';
// IMPORTAÇÃO FALTANTE
import { FormularioContato } from './FormularioContato'; // <--- Adicione esta linha

// Importe os estilos e outros componentes, como Header e Footer
import * as S from './styles';
import { Header } from '../../components/Header'; 
import { Footer } from '../../components/Footer'; 


export function Contato() {
    return (
        <> 
            <Header />
            <S.Container>
                <S.ContentSection>
                    <S.Title>Fale com a <S.Highlight>ConnectFlight</S.Highlight></S.Title>
                    <p>
                        Utilize o formulário abaixo para nos enviar sua mensagem.
                    </p>
                    
                    {/* Linha 23 (Onde o erro estava ocorrendo) */}
                    <FormularioContato />
                    {/* FIM DA INSERÇÃO */}

                    <S.ContactInfo>
                        <p>Telefone: (00) 1234-5678</p>
                        <p>Endereço: Rua do Código Limpo, 123</p>
                    </S.ContactInfo>

                </S.ContentSection>
            </S.Container>
            <Footer />
        </>
    );
}