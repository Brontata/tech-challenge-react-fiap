
# Tech Challenge React - FIAP

Este projeto é uma aplicação front-end desenvolvida com React e Vite. Esta documentação oferece informações sobre o **setup inicial**, a **arquitetura da aplicação**, e um **guia de uso**.

## Índice

1. [Setup Inicial](#setup-inicial)
2. [Arquitetura da Aplicação](#arquitetura-da-aplicação)
3. [Guia de Uso](#guia-de-uso)

---

## Setup Inicial

Para rodar este projeto localmente, siga os passos abaixo:

### 1. Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- [Node.js](https://nodejs.org/) (versão 14.x ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### 2. Clonando o Repositório

Clone o repositório em sua máquina:

```bash
git clone https://github.com/Brontata/tech-challenge-react-fiap.git
cd tech-challenge-react-fiap
```

### 3. Instalando Dependências

Use o gerenciador de pacotes `npm` ou `yarn` para instalar as dependências do projeto:

```bash
npm install
```

ou

```bash
yarn install
```

### 4. Executando a Aplicação

Após instalar todas as dependências, execute o comando abaixo para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

ou

```bash
yarn dev
```

Acesse a aplicação no seu navegador através do endereço `http://localhost:5173`.

---

## Arquitetura da Aplicação

A aplicação foi desenvolvida utilizando a biblioteca React e a ferramenta de build Vite. A seguir, é apresentado um resumo dos principais diretórios e arquivos da aplicação:

```
├── public/              # Arquivos estáticos públicos
├── src/                 # Código-fonte da aplicação
│   ├── assets/          # Imagens e outros recursos estáticos
│   ├── components/      # Componentes React reutilizáveis
│   ├── pages/           # Páginas principais da aplicação
│   ├── routes/          # Configurações de rotas da aplicação
│   ├── services/        # Integração com APIs e outros serviços externos
│   ├── styles/          # Arquivos de estilo (CSS/SASS)
│   ├── App.jsx          # Componente principal da aplicação
│   └── main.jsx         # Ponto de entrada do React
├── .env                 # Variáveis de ambiente
├── package.json         # Gerenciamento de dependências
├── vite.config.js       # Configuração do Vite
└── README.md            # Documentação do projeto
```

### Principais Tecnologias e Bibliotecas Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida, focada no desenvolvimento de aplicações web modernas.
- **React Router**: Utilizado para gerenciar a navegação entre páginas.
- **Axios**: Para realizar chamadas HTTP para APIs externas.

### Padrões e Boas Práticas

A aplicação segue alguns padrões e boas práticas comuns no desenvolvimento com React, como:

- **Componentização**: Cada parte da interface é construída como um componente React reutilizável.
- **State Management**: O estado local de cada componente é gerenciado usando hooks, como `useState` e `useEffect`.
- **Roteamento**: Utiliza o `React Router` para a navegação entre diferentes páginas da aplicação.
- **Chamadas HTTP**: Utiliza o `Axios` para comunicação com APIs externas.

---

## Guia de Uso

A seguir, estão as instruções sobre como usar a aplicação.

### 1. Funcionalidades Principais

- **Autenticação**: A aplicação permite que os usuários façam login e logout.
- **Navegação**: A aplicação possui várias páginas acessíveis através do menu de navegação.
- **Integração com API**: A aplicação se comunica com uma API externa para buscar e exibir dados dinâmicos.

### 2. Deploy

Para realizar o deploy da aplicação, siga os passos abaixo:

1. Gere o build de produção:

```bash
npm run build
```

ou

```bash
yarn build
```

2. Os arquivos gerados estarão no diretório `dist/`. Suba esse diretório para seu servidor de produção ou serviço de hospedagem.

---

## Contato

Se você tiver dúvidas ou sugestões sobre o projeto, entre em contato com a equipe de desenvolvimento.
