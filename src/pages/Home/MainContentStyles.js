// home/MainContentStyles.js
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// --- Variáveis de Cores ---
const COLORS = {
  primary: '#EE24FF', // Roxo Destaque
  secondary: '#3F3D56', // Roxo Escuro (Rodapé e Ilustração)
  textTitle: '#333333',
  textBody: '#666666',
};

// Componente Principal
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  background-color: white;
  
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 20px 0;
  text-align: center;
`;

// --- Ilustração ---
export const IllustrationWrapper = styled.div`
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
`;

export const TravelIllustration = styled.img`
  max-width: 100%; 
  height: auto;
  width: 350px; /* Tamanho da ilustração na imagem */
`;

// --- Tipografia ---
export const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: 400; /* Não é negrito */
  color: ${COLORS.textTitle};
  margin-bottom: 25px;
  line-height: 1.2;
  text-shadow: 1px 1px 5px #bebdbdff; 
`;

export const HighlightText = styled.span`
  color: ${COLORS.primary};
  font-weight: 700; /* Negrito */
`;

export const BoldText = styled.span`
  font-weight: 700;
`;

export const BodyParagraph = styled.p`
  font-size: 16px;
  color: ${COLORS.textBody};
  line-height: 1.6;
  margin-bottom: 15px;
  padding: 0 160px; /* Limita a largura do texto para centralizar */

  &.wide-paragraph {
    margin-top: 25px;
  }
`;

export const SmallText = styled(BodyParagraph)`
  font-size: 14px;
  margin-top: 30px;
  margin-bottom: 0;
`;

// --- Navegação Inferior ---
export const FooterNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px; 
  margin-top: 60px;
  margin-bottom: 100px; 
`;

export const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 600; 
  color: #333333; /* ou ${COLORS.textTitle} se estiver usando variáveis */
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #EE24FF; /* ou ${COLORS.primary} */
  }
`;

// --- Rodapé Escuro ---
export const PageFooterDark = styled.footer`
  width: 100%;
  background-color: ${COLORS.secondary};
  min-height: 00px;
  margin-top: auto; 
`;