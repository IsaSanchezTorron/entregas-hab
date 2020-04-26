const fs = require("fs-extra");
const minimist = require("minimist");
const datefns = require("date-fns");
const path = require("path");

async function createTodoList(filePath) {
  try {
    await fs.outputJson(filePath, { a: "testing" });
  } catch (err) {
    console.log(`Ha tenido lugar el error ${err}`);
  }
}

createTodoList("./tasks.json");
