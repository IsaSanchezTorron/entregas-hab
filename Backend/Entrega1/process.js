const minimist = require ("minimist");
const {
    addTodo,
    markAsDone,
    markAsUnDone,
    listTodos,
    cleanTodos,
} = require("./lib/actions");

const {_, priority, list, donde, undone, clean} = minimist(
process.argv.slice(2)
);

//Procesamos los argumentos
 if (clean){
     cleanTodos();
     process.exit();
 }
 if (list){
     listTodos();
     process.exit();
 }

 if (done){
     markAsDone({index: done});
     process.exit();
 }

 if (undone) {
     markAsUnDone({index: undone});
     process.exit;
 }

 addTodo({
     text: _.join(" ");
     priority,
 });