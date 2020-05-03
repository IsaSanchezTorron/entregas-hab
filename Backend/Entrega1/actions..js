/*node todo.js Comprar pan //Añadiria "comprar pan" al principio de la lista de tareas
node todo.js Ir al dentista--priority //Añadiria con prioridad alta
node todo.js--list //Listaría todas las tareas
node todo.js--done = 1 //Marcaría la tarea 1 como hecha
node todo.js--undone = 1 //Desmarcaría la tarea 1 como hecha
node todo.js--clean //Borraria las tareas ya hechas
*/
//Cada tarea debe guardar el texto de la tarea, el estado y fecha añadida
//Cuando se listen debe mostrar toda esa información

//La lista de tareas debe guardarse en un archivo .tasks.json en el directorio personal del usuario.

//Modules:
//minimist
//fs-extra
//date-fns

//PARA NOTA:
//La aplicación debería leer un archivo .env que tuviera una variable de entorno LANG=es/gl
//en base a esa variable mostrar los textos de la aplicación

const fs = require("fs-extra");
const os = require("os");
const path = require("path");
requiere("dotenv").config();
console.log(process.env.LANG);
console.log(process.env.TASKS_FILE);

// Devolver un objeto con la todoLis guardada o si no hay un objeto inicialodoList
async function readTodoList() {
  const todoFile = path.join(os.homedir(), process.env.TASKS_FILE);
  try {
    await fs.ensureFile(todoFile);
    const currenTodos = await fs.readFile(todoFile, "utf-8");
    console.log("Current", currentTodos);

    if (currentTodos) {
      return JSON.parse(currenTodos);
    }

    return {
      tasks: [],
    };
    console.log("Current", currentTodos);
  } catch (error) {
    console.error(error);
  }
}

//Meter un todo al principio de la lista y guardarla
async function addTodo({ text, priority }) {
  const currentTodos = await readTodoList();
}

//Marcar un todo como  hecho y guardar la lista
async function markAsDone({ index }) {}

//Marcar un todo como  hecho y guardar la lista
async function markAsUnDone({ index }) {}

//Listar todos los todos
async function listTodos() {}

//Borrar los marcados como hechos
async function cleanTodos() {}

async function saveTodosToFile(taskList) {
  taskList.lastModified = newDate();
  await fs.outputJSON(todoFile, taskList, { spaces: 2 });
}

module.exports = {
  addTodo,
  markAsDone,
  markAsUnDone,
  listTodos,
  cleanTodos,
};
