// PUEDES VER ESTO?

const minimist = require("minimist");
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

console.log({ _, priority, list, done, undone, clean });

//Procesamos los argumentos
if (clean) {
  cleanTodos();
  process.exit();
}
if (list) {
  listTodos();
  process.exit();
}

if (done) {
  markAsDone({ index: done });
}

if (undone) {
  markAsUnDone({ index: undone }).then(() => {
    process.exit();
  });

  const todoText = _.join("");

  if (todoText) {
    addTodo({
      text: todoText,
      priority: priority ? "high" : "normal",
      done: false,
    });
  }

  addTodo({
    text: _.join(" "),
    priority,
  });
}
