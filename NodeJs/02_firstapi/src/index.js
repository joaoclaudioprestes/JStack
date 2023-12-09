const http = require("http");
const routes = require("./routes");

const server = http.createServer((request, response) => {
  // Criamos o servidor
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);

    const route = routes.find((routeObject) => {
        routeObject.endpoint === request.url && routeObject.method === request.method
    });// find preocura um elemento dentro do array

    if (route) {
        route.handler(request, response);
    }


//   if (request.url === "/users" && request.method === "GET") {
//     UserController.listUsers(request, response);
//   } else {
//     response.writeHead(404, { "content-Type": "application/json" }); // Código de ok
//     response.end(`cannot ${response.method} ${response.url}`);
//   }
});

server.listen(3000, () =>
  console.log("🔥 Server started at http://localhost:3000")
);
