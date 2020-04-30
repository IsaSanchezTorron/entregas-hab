/* mini ejercicio para hoy!! Hacer un servidor web usando el módulo http de node de forma que cuando pongáis en el navegador http://localhost:3000/freedom conteste con un JSON así:

{
    "message": "Faltan 32 días para el final de la cuarentena"
}
*/
const http = require("http");
const server = http.createServer();
require("dotenv").config();

const urlParser = require("url");
const fs = require("fs").promises;
const path = require("path");
const port = process.env.PORT;

const { differenceInDays } = require("date-fns");

server.on("request", async function (request, response) {
  const { url, method, headers } = request;

  if (method.toUpperCase() === "GET" && url === "/freedom") {
    const data = await fs.readFile(
      path.join(_dirname, "response.json"),
      "utf-8"
    );

    response.statusCode = 200;
    response.setHeader("Content-type", "application/json");
    //response.end(data);
  } else {
    response.end("Ha habido un error");
  }

  server.listen(3000);
  console.log(`El servidor está funcionando en http://localhost:${port}`);
  response.end(JSON.stringify({ message: calcularDias() }));
});

function calcularDias() {
  let fechaHoy = new Date();
  let fechaFinal = new Date(2020, 06, 30);
  let tiempoRestante = fechaFinal.getTime() - fechaHoy.getTime();
  let dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  console.log(`Quedan ${dias} días para que acabe esta movida`);
}

calcularDias();
