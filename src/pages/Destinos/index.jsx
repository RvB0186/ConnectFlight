// src/pages/Destinos/index.jsx
import React from 'react';
// Importa todos os styled components locais como S
import * as S from './styles'; 

// Importa os componentes reutilizáveis (assumindo que estão na pasta components)
import { Header } from '../../components/Header'; 
import { Footer } from '../../components/Footer'; 

// 1. Importação das Imagens (Assets)
import buenosairesImg from '../../assets/buenosaires.jpeg'; 
import colombiaImg from '../../assets/colombia.jpg';
import santiagoImg from '../../assets/santiago.jpeg';
import uruguaiImg from '../../assets/uruguai.jpg';


// 2. Mock dos Dados para renderização da América Latina
const destinosData = [
    { name: "Argentina", img: buenosairesImg },
    { name: "Colômbia", img: colombiaImg },
    { name: "Chile", img: santiagoImg },
    { name: "Uruguai", img: uruguaiImg },
];


export function Destinos() { // Componente Funcional
    return (
        <>
            <Header /> 
            
            <S.Container>
                <S.ContentSection>
                    
                    <S.Title>
                        Nossos <S.Highlight>Destinos</S.Highlight> Incríveis
                    </S.Title>

                    <S.Paragraph>
                        Explore os melhores pacotes de viagens que a ConnectFlight oferece, com foco especial na América Latina.
                    </S.Paragraph>

                    {/* 3. Renderização do Grid de Destinos */}
                    <S.DestinationsGrid>
                        {destinosData.map((destino, index) => (
                            // Utiliza o componente Card estilizado
                            <S.DestinationCard key={index}>
                                <S.DestinationImage 
                                    src={destino.img} 
                                    alt={`Imagem do destino: ${destino.name}`} 
                                />
                                <S.DestinationName>
                                    {destino.name}
                                </S.DestinationName>
                            </S.DestinationCard>
                        ))}
                    </S.DestinationsGrid>

                </S.ContentSection>
            </S.Container>
            
            <Footer />
        </>
    );
}