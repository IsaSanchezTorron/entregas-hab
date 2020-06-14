const minimist = require("minimist");
const fs = require("fs-extra");
const chalk = require("chalk");

const inFiles = minimist(process.argv.slice(2));
async function showMeTheFile() {
  for (const file of inFiles._) {
    const filestats = await fs.statSync(file);
    const filesize = filestats.size;
    if (filesize < 10000) {
      const readFile = await fs.readFileSync(file).toString();
      console.log(chalk.green("Conseguido!!!"), chalk.magentaBright(readFile));
    } else {
      console.log(chalk.redBright("Este fichero supera el limite de peso"));
    }
  }
}
showMeTheFile();
