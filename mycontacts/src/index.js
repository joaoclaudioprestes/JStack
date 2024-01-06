const express = require("express");
const port = 3333;
const server = express();
const routes = require("./routes");

server.use(routes);

server.listen(port, () =>
  console.log(`🔥 Server started at http://localhost:${port}`)
);

// Repository Pattern -> Layer (Camada) de abstraçã de acesso ao Data Source
