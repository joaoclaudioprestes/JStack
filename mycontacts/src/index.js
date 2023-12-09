// Importa o módulo 'express' e atribui à variável 'express'
const express = require('express');

// Cria uma instância do aplicativo Express
const app = express();

// Define uma rota para o método HTTP GET, onde o caminho é '/' (raiz)
app.get('/', (request, response) => {
    response.send('Hello World!');
});

// Inicia o servidor na porta 3333 e exibe uma mensagem no console quando o servidor é iniciado
app.listen(3333, () => console.log('🔥 Server started at http://localhost:3333'));
