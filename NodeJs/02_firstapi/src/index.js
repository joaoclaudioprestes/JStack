const http = require("http");
const routes = require("./routes");
const { URL } = require("url");
const path = require("path");

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3000${request.url}`);

  // Criamos o servidor
  console.log(
    `Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`
  );

  let { pathname } = parsedUrl;

  const splitEndpoint = pathname
    .split("/")
    .filter((routeItem) => Boolean(routeItem));
    console.log(splitEndpoint);

  const route = routes.find((routeObject) => {
    routeObject.endpoint === pathname && routeObject.method === request.method;
  }); // find preocura um elemento dentro do array

  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams);
    route.handler(request, response);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(`cannot ${response.method} ${parsedUrl.pathname}`);
  }
});

server.listen(3000, () =>
  console.log("🔥 Server started at http://localhost:3000")
);
