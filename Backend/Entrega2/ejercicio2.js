//############################## 2. Medidor de memoria #######################################################
// ################## Hacer un programa en node que cuando lo ejecutes te ponga el % #########################
// ################## de memoria RAM libre que tienes disponible en el ordenador. ############################
// ###########################################################################################################

const os = require("os");

console.log("Memoria total:" + os.totalmem() + " bytes");
console.log("Memoria libre:" + os.freemem() + " bytes");

porcentajeMemoria = parseInt((os.totalmem() / os.freemem()) * 100);
console.log(`Tienes un ${porcentajeMemoria} % de memoria libre `);

//--------------------------------------------

let x = os.totalmem();
let y = os.freemem();
let z = (100 * x) / y;
console.log(z);

// No consigo encontrar la lógica del porcentaje :(
