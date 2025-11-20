// src/pages/Sobre/index.jsx
import React from 'react';
import sonhoImg from '../../assets/sonho.jpg'; 
// Importa todos os styled components locais como S
import * as S from './styles'; 

// Importa os componentes reutilizáveis (assumindo que estão na pasta components)
// Lembre-se de verificar o caminho correto de importação no seu projeto.
import { Header } from '../../components/Header'; 
import { Footer } from '../../components/Footer'; 


export function Sobre() { // Exportação nomeada do componente (boa prática)
    return (
        <>
            <Header /> {/* Componente de cabeçalho */}
            
            <S.Container>
                <S.ContentSection>
                    
                    {/* Título animado e chamativo, usando Highlight para cor de destaque */}
                    <S.Title>
                        <S.Highlight>ConnectFlight</S.Highlight>
                    </S.Title>
                    {/* 2. INSERÇÃO DA IMAGEM AQUI */}
                    <S.AboutImage 
                        src={sonhoImg} 
                        alt="Destino de férias dos sonhos" 
                    />
                    {/* FIM DA INSERÇÃO */}
                    <S.Paragraph>
                        A ConnectFlight nasceu em 2020 com a missão de simplificar a experiência de viagem para o cliente brasileiro. Inicialmente, focamos no agenciamento de voos domésticos, construindo uma base sólida de confiança e excelência em serviços.
                    </S.Paragraph>

                    <S.Paragraph>
                        Com o rápido crescimento e o reconhecimento pela qualidade do atendimento, expandimos nossas operações. Atualmente, atuamos em todos os destinos globais, com um foco especial na criação de pacotes exclusivos para a América Latina, oferecendo experiências inesquecíveis em países como Argentina, Chile, Peru e México.
                    </S.Paragraph>

                    <S.Paragraph>
                        Nossa operação é pautada na tecnologia e no atendimento humanizado, garantindo que cada voo, seja ele doméstico ou internacional, seja apenas o começo de uma jornada incrível. Na ConnectFlight, você encontra a segurança e a flexibilidade que precisa para realizar a viagem dos seus sonhos.
                    </S.Paragraph>

                </S.ContentSection>
            </S.Container>
            
            <Footer /> {/* Componente de rodapé */}
        </>
    );
}