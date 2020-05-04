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

let totalMegas = os.totalmem() / 1000000;
let libresMegas = os.freemem() / 1000000;
let porcentaje = parseInt((100 * totalMegas) / libresMegas);
//console.log(totalMegas, libresMegas);
console.log(`Tienes un ${porcentaje} % de memoria libre `);

// No consigo encontrar la lógica del porcentaje :(

console.log(__dirname);
