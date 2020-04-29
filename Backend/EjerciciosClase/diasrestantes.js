/* mini ejercicio para hoy!! Hacer un servidor web usando el módulo http de node de forma que cuando pongáis en el navegador http://localhost:3000/freedom conteste con un JSON así:

{
    "message": "Faltan 32 días para el final de la cuarentena"
}
*/
require("dotenv").config();
const http = require("http");
const urlParser = require("url");
const fs = require("fs").promises;
const path = require("path");
const port = process.env.PORT;
const server = http.createServer();

server.on("request", async function (request, response) {
  const { url, method } = request;

  if (method.toUpperCase() === "GET" && url === "/freedom") {
    const data = await fs.readFile(
      path.join(_dirname, "response.json"),
      "utf-8"
    );

    response.statusCode = 200;
    response.setHeader("Content-type", "application/json");
    response.end(data);
  } else {
    console.error("Ha habido un error");
  }
});

server.listen(port);
console.log(`El servidor es http://localhost:${port}`);

function calcularDías() {
  let fechaHoy = new Date();
  let fechaFinal = new Date(2020, 06, 30);
  let tiempoRestante = fechaFinal.getTime() - fechaHoy.getTime();
  let dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  console.log(`Quedan ${dias} días para que acabe esta movida`);
}
