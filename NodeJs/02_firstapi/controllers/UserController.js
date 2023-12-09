const users = require("../mocks/users");

module.exports = {
  listUsers(request, response) {
    // Endpoint para listar usuários
    const { order } = request.query;
    const sortedUsers = users.slice().sort((a, b) => {
      return order === "desc" ? b.id - a.id : a.id - b.id;
    });

    response.writeHead(200, { "Content-Type": "application/json" }); // Código de sucesso e tipo de conteúdo JSON
    response.end(JSON.stringify(sortedUsers));
  },

  getUserById(request, response) {
    const userId = parseInt(request.params.id, 10); // Garante que o ID seja um número inteiro
    const user = users.find((u) => u.id === userId);

    if (user) {
      response.writeHead(200, { "Content-Type": "application/json" }); // Código de sucesso e tipo de conteúdo JSON
      response.end(JSON.stringify(user));
    } else {
      response.writeHead(404, { "Content-Type": "application/json" }); // Código de não encontrado e tipo de conteúdo JSON
      response.end(JSON.stringify({ erro: "Usuário não encontrado" }));
    }
  },
};
