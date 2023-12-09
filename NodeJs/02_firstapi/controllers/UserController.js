const users = require("../mocks/users");

module.exports = {
  listUsers(request, response) {
    // Endpoint para listar usuários
    response.writeHead(200, { "content-Type": "application/json" }); // Código de ok
    response.end(JSON.stringify(users));
  },
};
