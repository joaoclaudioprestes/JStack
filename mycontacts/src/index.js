const express = require("express");
const PORT = 3333;
const server = express();
const routes = require("./routes");

server.use(routes);

server.listen(PORT, () =>
  console.log(`🔥 Server started at http://localhost:${PORT}`)
);

// Repository Pattern -> Layer (Camada) de abstraçã de acesso ao Data Source
