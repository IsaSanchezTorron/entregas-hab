const minimist = require("minimist");
const chalk = require("chalk");

const {
  addTodo,
  markAsDone,
  markAsUnDone,
  listTodos,
  cleanTodos,
} = require("./lib/actions");

const { _, priority, list, done, undone, clean } = minimist(
  process.argv.slice(2)
);

//Procesamos argumentos
if (clean) {
  cleanTodos().then(() => {
    console.log(chalk.green(`Lista de tareas vacía`));
    process.exit();
  });
}

if (list) {
  listTodos().then(() => {
    process.exit();
  });
}

if (done) {
  markAsDone({ index: done }).then(() => {
    console.log(chalk.green("Tarea marcada como O.K. ."));
    process.exit();
  });
}

if (undone) {
  markAsUnDone({ index: undone }).then(() => {
    console.log(chalk.green("Tarea marcada como no O.K."));

    process.exit();
  });
}

const todoText = _.join(" ");

if (todoText) {
  addTodo({
    text: todoText,
    priority,
  }).then(() => {
    console.log(chalk.green("Tarea añadida."));
    process.exit();
  });
}

