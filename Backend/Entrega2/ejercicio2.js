//############################## 2. Medidor de memoria #######################################################
// ################## Hacer un programa en node que cuando lo ejecutes te ponga el % #########################
// ################## de memoria RAM libre que tienes disponible en el ordenador. ############################
// ###########################################################################################################

const os = require("os");
const chalk = require("chalk");

console.log("Memoria total:" + os.totalmem() + " bytes");
console.log("Memoria libre:" + os.freemem() + " bytes");

porcentajeMemoria = Math.round(os.freemem * 100) / os.totalmem;
console.log(`Tienes un ${porcentajeMemoria} % de memoria libre `);

//--------------------------------------------

let totalMegas = os.totalmem() / 1000000;
let libresMegas = os.freemem() / 1000000;
let porcentaje = (100 * libresMegas) / totalMegas;
//console.log(totalMegas, libresMegas);
console.log(`Tienes un ${porcentaje} % de memoria libre `);
