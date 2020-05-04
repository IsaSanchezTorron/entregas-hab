const path = require("path");
const fs = require("fs").promises;

async function readFile(path) {
  try {
    const data = await fs.readFile(path);
    console.log(data.toString());
  } catch (error) {
    console.log(error);
  }
}
console.log(path);
readFile(path.join(__dirname, "archivo.txt"));
