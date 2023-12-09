const users = require("../mocks/users");

module.exports = {
  listUsers(request, response) {
    // Endpoint para listar usuários
    const { order } = request.query;
    const sorteUsers = users.sort((a, b) => {
      if (order === "desc") {
        return a.id < b.id ? 1 : -1;
      }
      return a.id > b.id ? 1 : -1;
    });
    response.writeHead(200, { "Content-Type": "text/html" }); // Código de ok
    response.end(JSON.stringify(sorteUsers));
  },


  getUserById(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" }); // Código de ok
    response.end(JSON.stringify({ ok: true}));
  }
};


