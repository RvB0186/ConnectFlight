ConnectFlight ✈️

Projeto desenvolvido como parte da Atividade Avaliativa A2 da disciplina de Programação para WEB II do curso de Sistemas de Informação da Universidade Estadual do Tocantins (UNITINS).

O objetivo principal foi desenvolver uma Single Page Application (SPA) utilizando React, reproduzindo fielmente um protótipo de alta fidelidade do Figma e implementando funcionalidades de navegação e componentização.

📋 Sobre o Projeto

A aplicação simula a página inicial de uma agência de viagens fictícia chamada ConnectFlight. Além da reprodução visual da Home, foram desenvolvidas as páginas internas (que não existiam no protótipo original) para criar uma experiência de navegação completa.

Funcionalidades

Home: Reprodução fiel do design proposto, com Call to Action para pacotes de viagem.

Navegação: Roteamento via react-router-dom sem recarregamento de página (SPA).

Páginas Adicionais:

Destinos: Galeria responsiva de locais para viagem.

Sobre: História da empresa e missão.

Contato: Formulário de contato estilizado.

Responsividade: Layout adaptável para dispositivos móveis e desktop.

💡 Decisões de Projeto e Fidelidade ao Layout

Para atender integralmente aos critérios de avaliação, o projeto equilibra a fidelidade visual ao protótipo com as boas práticas de desenvolvimento Web:

Redundância Intencional de Navegação na Home:
A página inicial (Home) segue estritamente o desenho do Figma, que apresenta links de navegação centralizados no corpo da página (Destinos, Sobre, Contato).
Simultaneamente, para cumprir o requisito de estrutura de componentes globais (Header e Footer) presente em todas as telas, o Header foi mantido na Home. Isso cria uma redundância visual intencional (os links aparecem no topo e no meio), necessária para:

Manter a fidelidade 100% ao desenho original do corpo da página.

Garantir a consistência da navegação global da aplicação.

Componentização:
O código foi fortemente componentizado (Botões, Inputs, Cards, Header, Footer) para facilitar a manutenção e reutilização, utilizando Styled Components para isolar o CSS (CSS-in-JS).

🚀 Tecnologias Utilizadas

React (Vite)

React Router Dom (v6/v7) - Para gerenciamento de rotas.

Styled Components - Para estilização componentizada e temas.

JavaScript (ES6+)

📂 Estrutura de Pastas

O projeto segue uma arquitetura organizada para escalabilidade:

src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes reutilizáveis (Header, Footer, etc.)
├── pages/           # Páginas da aplicação (Home, Contato, Destinos, Sobre)
├── routes/          # Configuração de rotas (React Router)
├── styles/          # Estilos globais e Tema (Cores, Fontes)
└── main.jsx         # Ponto de entrada


🔧 Como Executar o Projeto

Pré-requisitos: Você precisa ter o Node.js instalado em sua máquina.

Clone o repositório:

git clone [https://github.com/seu-usuario/ConnectFlight.git](https://github.com/seu-usuario/ConnectFlight.git)


Acesse a pasta do projeto:

cd ConnectFlight


Instale as dependências:

npm install


Execute o servidor de desenvolvimento:

npm run dev


Acesse no navegador:
O terminal mostrará o link local, geralmente http://localhost:5173.

👤 Autor

Riê Veloso de Brito
Acadêmico de Tecnologia em Análise e Desenvolvimento de Sistemas - ToGraduado - UNITINS
Disciplina: Programação para WEB II
Docente: Bruno Bandeira Fernandes

"O seu próximo destino pode estar aqui..."