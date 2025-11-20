// home/MainContent.jsx
import React from 'react';
import illustration from '../../assets/illustration.jpg'; // Fixed to .jpg and relative path
import { 
  MainContainer, 
  ContentWrapper, 
  IllustrationWrapper, 
  TravelIllustration, 
  MainTitle, 
  HighlightText, 
  BoldText, 
  BodyParagraph, 
  SmallText, 
  FooterNav, 
  NavLink, 
  PageFooterDark 
} from './MainContentStyles'; // Importa os Styled Components

const MainContent = () => {
  return (
    <MainContainer>
      <ContentWrapper>
        
        {/* 1. Ilustração */}
        <IllustrationWrapper>
          <TravelIllustration 
            src={illustration} 
            alt="Ilustração de mapa e pessoa" 
          />
        </IllustrationWrapper>

        {/* 2. Título Principal */}
        <MainTitle>
          O seu próximo <HighlightText>destino</HighlightText> pode estar aqui...
        </MainTitle>

        {/* 3. Parágrafos de Descrição */}
        <BodyParagraph>
          Aqui você encontra uma seleção de <BoldText>pacotes completos</BoldText> para as suas férias!
        </BodyParagraph>

        <BodyParagraph className="wide-paragraph">
          No <BoldText>ConnectFlight</BoldText> você encontra pacotes de viagens nacionais e internacionais que incluem: passagens aéreas, hotéis, café da manhã, e até seguro viagem com <BoldText>preços arrasadores</BoldText>!
        </BodyParagraph>

        <SmallText>
          Se você ainda não tem um destino definido, confira nossos destinos.
        </SmallText>

        {/* 4. Navegação Inferior */}
        <FooterNav>
          <NavLink to="/destinos">Destinos</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </FooterNav>
      </ContentWrapper>
      
      {/* 5. Rodapé Escuro */}
      <PageFooterDark>
        {/* Conteúdo do rodapé (se houver) */}
      </PageFooterDark>
    </MainContainer>
  );
};

export default MainContent;