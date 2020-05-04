//####################### 1. Show me the files!! ###################################################
// Crear un programa de node que muestre en la consola el contenido de los ficheros que se pasen por
// línea de comandos pero sólo si son menos de 10Kb. node showfiles.js fichero1.txt ../files/fichero2.css
//#################################################################################################

const fs = require("fs-extra").promises;
//require("dotenv").config();
const path = require("path");
//process = require("process");
//console.log("Hola mundo");

console.log(arguments);

async function readFile(filePath) {
  console.log("procesando fichero", filePath);

  try {
    const absolutePath = path.resolve(filePath);
    const pathInfo = await fs.stat(absolutePath);
    // const content = await fs.readFile(path);
    // console.log(content.toString());
    if (!path.info.isFile()) {
      throw new Error("La ruta no es un fichero");
    }
    if (!pathInfo.size > 10000) {
      throw new Error("El fichero es demasiado grande");
    }
    const pathContent = await fs.readFile(absolutePath);
    console.log("Los contenidos del fichero son" + pathContent.toString());
  } catch (error) {
    console.error(error.message);
  }
}

async function main() {
  for (const argument of arguments) {
    const content = await showFile(argument);
    if (content) console.log(content);
  }
}
main();

//readFile(path.join(arguments));
//readFile(path.join(__dirname,));
//const { nombreDeArchivo } = process.argv;
//readFile();

/*
function leerArchivo(archivo) {
  return new Promise(function (resolve, reject) {
    fs.readFile(archivo, "utf-8", function (err, data) {
      if (err) reject(err);
      else resolve(data);
    });
  });
}
*/
