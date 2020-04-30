/*
Mini ejercicio para hoy:

aquí tenéis un json grande con una lista de nombre de persona gallegos: https://raw.githubusercontent.com/bertez/corpora/master/names/names.json
teneis que hacer un servidor web en express que responda a las seguintes urls:
http://localhost:3000/names -> devuelve al navegador una respuesta tipo json con la lista completa de nombres
http://localhost:3000/names?gender=F -> devuelve al navegador sólo los nombres de mujer
http://localhost:3000/names?gender=M -> devuelve al nav sólo los nombres de hombre
http://localhost:3000/random -> devuelve un nombre aleatorio de la lista
Podéis usar require para cargar el json: const names = require('./names.json');
*/

const names = require("./names.json");
const express = require("express");
const app = express();

app.get("/names", (req, res) => {
  res.send(names);
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000);

//El contenido del json de nombres lo copiais de la URL que os puse y lo pegais en un archivo en vuestro directorio

const names = require("./names.json");
const express = require("express");
const app = express();

app.get("/names", (req, res) => {
  const gender = req.query.gender;

  if (gender === "M") {
    //??
  } else if (gender === "F") {
    //??
  }

  res.send(names);
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000);
