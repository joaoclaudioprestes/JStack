const http = require("http");
const users = require("/mocks/user");

const server = http.createServer((request, response) => { // Criamos o servidor
    console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);

    if (request.url === "/users" && request.method === "GET") {
        response.writeHead(200, {"content-Type": "application/json"}); // Código de ok
        response.end(JSON.stringify(users));



    } else {
        response.writeHead(404, {"content-Type": "application/json"}); // Código de ok
        response.end(`cannot ${response.method} ${response.url}`);
    }




    // response.writeHead(200, {"content-Type": "text/html"}); // Código de ok
    // response.end("<h1>Hello Word!</h1>");
}); // Criamos um servidor

server.listen(3000, () => console.log("🔥 Server started at http://localhost:3000"));