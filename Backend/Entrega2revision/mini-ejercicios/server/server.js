// Que nos dé los buenos días por la mañana y si es por la tarde que nos dé las buenas tardes.

require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT;

const date = new Date();
const hour = date.getHours();

app.get("/", (req, res) => {
  if (hour < 12 && hour > 5) {
    res.send("Hola BUENOS DÍAS! 🌞");
  } else {
    res.send("Buenas tardes! 🌱");
  }
});
app.use((error, req, res) => {
  res.status(404).send("Algo ha salido mal 👎");
});

app.listen(port, () => {
  console.log("Servidor web funcionando! 🐳 ");
});
