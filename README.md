## React GraphQL

Este é o frontend da aplicação, desenvolvido em React, que consome a API GraphQL fornecida
pelo backend em Go.

## Pré-requisitos

- Node.JS (v20.3.1)
- NPM (v9.7.2)

## Instalação

**1 -** Clone este repositório.
**2 -** Execute o comando `npm install` para instalar as dependências.
**3 -** Execute o comando `npm start` para iniciar o aplicativo.

## Configuração

**1 -** Edite o arquivo `src/index.js` e verifique se a URL da API GraphQL
está correta: `const client = new ApolloClient({
  url: 'http://localhost:8080/query', // Verifique a URL correta da API GraphQL
  cache: new InMemoryCache(),
});`

## Uso

- Acesse o aplicativo em seu navegador em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas!
