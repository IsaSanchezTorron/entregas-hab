//####################### 1. Show me the files!! ###################################################
// Crear un programa de node que muestre en la consola el contenido de los ficheros que se pasen por
// línea de comandos pero sólo si son menos de 10Kb. node showfiles.js fichero1.txt ../files/fichero2.css
//#################################################################################################

const fs = require("fs-extra").promises;
require("dotenv").config();
const path = require("path");
process = require("process");
const argParser = require("minimist");
console.log("Hola mundo");

async function readFile(archivo) {
  try {
    const contenido = await fs.readFile(path);
    console.log(content.toString());
  } catch (err) {
    console.error(err);
  }
}

//readFile(path.join(__dirname,));
let arguments = argParser(process.argv.slice(2));
readFile(path.join(__dirname, arguments));
