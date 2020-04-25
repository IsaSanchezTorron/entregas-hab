'use strict';
//#######################################################################
//################ PRIMEROS INTENTO PALABRA MÁS LARGA ###################
//#######################################################################
/*
function dividirCadenaEnPalabras(cadenaAPalabras, separador) {
  let arrayDeCadenas = cadenaAPalabras.split(separador);
  console.log('La frase es: "' + cadenaAPalabras + '"');
  console.log('La frase tiene ' + arrayDeCadenas.length + ' palabras. ');

}
function letterCount(dividirCadenaEnPalabras, arrayDeCadenas) {
  if (temporal > arrayDeCadenas[i].lenght) {
    console.log('La palabra más larga es' + temporal);
    return temporal;
  }
}

let espacio = ' ';
let cadenaDiaPrecioso = 'Hoy es un día estupendo y fantástico.';
//let cadenaPorFavorQueSigaAsi = 'Esperamos que no venga nadie y lo joda.';

dividirCadenaEnPalabras(cadenaDiaPrecioso, espacio);

/*for (let i = 0; i <= arrayDeCadenas.lenght; i++) {
console.log(arrayDeCadenas[i] + ' - ');
let temporal = arrayDeCadenas[i].lenght;
console.log(arrayDeCadenas[i] + 'letras');
*/


//######################################################################################
//####################### PALABRA MÁS LARGA ############################################
//######################  primera propuesta ############################################
//#####################################################################################

/*
function letterCount(frase) {
  let palabraMasLarga = '';
  let palabraSeparada = frase.replace(',:;.,', ' ').split(' ');
  palabraSeparada.forEach(function(palabraSeparada) {
    if (palabraSeparada.length > palabraMasLarga.length) {
      palabraMasLarga = palabraSeparada;
    }
  });
  console.log(palabraMasLarga);
  return palabraMasLarga;
}

letterCount('Hoy es un día estupendo y fantástico');

*/


'use strict';

//############################################################################
//# AQUI PRIMEROS INTENTOS FRUSTRADOS DE HACER ALGO CON EL CONVERSOR BINARIO #
//############################################################################

/*
function binaryConverter() {
  let divisionNumero = [0];
  //let numeroBinario = prompt('¿Cuál es el número binario que deseas convertir a entero?');
  numeroBinario = divisionNumero.split('');
  console.log(divisionNumero);
}
binaryConverter(10001);
/*

//##############################################################################
//##### CUANDO CREES QUE PUEDES HACERLO CASI POR INTUICIÓN PERO NO.  ###########
//##############################################################################

function pedirNumero() {
  let numero = [];
  let contador;
  for (let i = 0; i < 1; i++) {
    let numero[] = prompt('¿Cuál es el número binario que deseas convertir en un entero?)';
    numero[i] = x;
  }
  for (let i = 0; i <= numero.lenght; i++) {
    contador += numero[i] + ' ';
  }
  console.log(numero);
}
binaryConverter(pedirNumero());
*/

//###############################################################################
//##### CUANDO CREES QUE PUEDES COMPRENDER EL BUCLE DE LA CONVERSIÓN ############
//################ pero el unico bucle es el tuyo ###############################
//################################################################################
/*

function binaryConverter() {
  let numero = prompt('Cuál es el número binario que deseas convertir en un entero?');
  numero = numero.split(''); // compruebo que está en un array
  console.log(numero);

  for (let i = 0; i < numero.length; i++) {
    if (numero[i] == 0) {
      numero += Math.pow(2, numero.lenght - 1 - i);
    }
    console.log(numero);
  }
}
binaryConverter();
*/

//################################################################################################
//################ SIGO INTENTANDO DISEÑAR EL ALGORITMO DEL CÁLCULO  :/ ###########################
//######################        Y ninguno funciona      ###########################################
//################################################################################################

/*
function binaryConverter() {
  let numero = prompt('Cuál es el número binario que deseas convertir en un entero?');
  numero = numero.split('');
  console.log(numero); // compruebo que está en un array

  for (let i = numero.length - 1; (i = 0); i--) {
    numero = numero + Math.pow(2, numero[i]);
  }

  console.log('El número es el' + numero);
}

*/
//-------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
/*


function binaryConverter(numero) {
  // let numero = prompt('Cuál es el número binario que deseas convertir en un entero?');
  numero = numero.split('');
  let numeronuevo = numero;
  console.log(numero); // compruebo que está en un array
  let contador = 0;
  for (let i = numero.length - 1; (i = 0); i--) {
    let numero = numeronuevo + Math.pow(2, contador);
    contador++;
    return numeronuevo;
  }
  console.log('El número es el ' + numeronuevo);
}

binaryConverter("110110");


/*
---------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
/*

function binaryConverter() {
  let numero = prompt('¿Cuál es el número binario que deseas convertir en un entero?');
  numero = numero.split('');
  let numeroEntero = 0;
  console.log(numero); // compruebo que está en un array
  for (let i = numero.length; i < 0; i--) {
    numeroEntero = numero[i] + 2 ** i;
  }
  console.log('El número es el ' + numeroEntero);
}

binaryConverter('');

*/
//############################################################################
//################### KEEP ON... Sin resultados ##############################
//############################################################################
/*
function binaryConverter() {
  let numero = prompt('¿Cuál es el número binario que deseas convertir en un entero?');
  numero = numero.split('');
  let numeroEntero = 0;
  console.log(numero); // compruebo que está en un array
  for (let i = numero.length; i < 0; i--) {
    numeroEntero = numero[i] * 2 ** i;
  }
  console.log('El número es el ' + numeroEntero);
}

binaryConverter('101101');

*/

//########################################################################
//############### CUANDO SABES ESTO DESDE EL PRINCIPIO ###################
//#### pero no tiene mérito alguno porque lo has visto en internet########
//########################################################################
/*
let binario = '1100'; 
let binarioEnDecimal = parseInt(binario, 2); 
console.log('El número binario %s en decimal es %s', binario, binarioEnDecimal);
*/

//##############################################################################
//################ AQUI CUANDO LO RETOMÉ MÁS CLARAMENTE ########################
//##############################################################################
// hice dibujitos y me di cuenta de que no comprendía bien la operaciónes 
// en los primeros intentos. Me ha ayudado a aprender mucho todas las vueltas 
// que he dado, decidí sacarme por consola pistas para ir corrigiendo el 
// algoritmo sobre la marcha y además opté por darle la vuelta al array 
//######################### y por fin saliò ######################################
//#####################Fue el primero que hice####################################
//################# VERSIÓN CON COMENTARIOS Y PISTAS #############################
//################################################################################
/*
function binaryConverter() {
  let numero = prompt('Cuál es el número binario que deseas convertir en un entero?');
  numero = numero.split('');
  console.log('Primera comprobacion');
  console.log(numero); // compruebo que está en un array

  let numeroEntero = 0;
  let contador = 0;
  //console.log('Segunda comprobación');
  console.log(numero.length); // Comprobación
  const numeroReves = numero.reverse();
  console.log('ANTES DEL BUCLE comprobación');
  for (let i = 0; i < numeroReves.length; i++) {
    console.log('Ha entrado en el bucle ' + i + ' veces');
    console.log('Ahora numero Entero es = ' + numeroEntero);
    numeroEntero += Math.pow(2, i) * numeroReves[i];
    console.log('Estoy elevando Dos a ' + i + 'para sumarselo ahora a  ' + numeroEntero);
    console.log('Ahora numero Entero es = ' + numeroEntero);
    console.log('Ahora el valor de i es  ' + i);
  }
  alert('Es el número decimal ' + numeroEntero);
}
binaryConverter();
*/
//###########################################################################
//############### AQUÍ EL CÓDIGO LIMPIO DEL CONVERSOR #######################
//############################################################################
/*
function binaryConverter() {
  let numero = prompt('Cuál es el número binario que deseas convertir en un entero?');
  numero = numero.split('');
  let numeroEntero = 0;
  const numeroReves = numero.reverse();
  for (let i = 0; i < numeroReves.length; i++) {
    numeroEntero += Math.pow(2, i) * numeroReves[i];
  }
  alert('Es el número decimal ' + numeroEntero);
}
binaryConverter();
*/

//####################################################################################
//##################### DETECTOR DE PALÍNDROMOS ######################################
//###################### Primera aproximación #########################################
//############### tuve que buscar cómo eliminar espacios en cadenas ###################
//#####################################################################################

/*

function palindromeTwo() {
  let cadena = prompt('Escriba la cadena de texto que quiera comprobar').toLowerCase();
  cadena = cadena.replace(/ /g, ''); // Tuve que buscar esto en Internet
  console.log(cadena);
  let tamaño = cadena.length;
  if (tamaño === 0 || tamaño === 1) {
    //return false;
    console.log('La palabra es demasiado corta');
  }
  for (let i = 0; i < tamaño / 2; i++) {
    if (cadena[i] != cadena[tamaño - 1 - i]) {
      //return false;
      console.log('No es un palíndromo');
      break;
    } else if (true) {
      console.log('Es un palíndromo');
    }
  }
}
palindromeTwo();

*/
//##################################################################################
//###################### SEGUNDO DETECTOR DE PALÍNDROMOS ###########################
//##################################################################################
/*
function palindromeTwo() {
  let frase = prompt('Cuál es la frase que deseas comprobar si es un palídromo?');
  let fraseDerecho = frase.toLowerCase().replace(/[\W_]/g, ''); //VIsto en internet para eliminar caracteres que no sean números ni letras
  console.log(fraseDerecho); //comprobación
  let fraseReves = fraseDerecho
    .split('')
    .reverse()
    .join('');      // Descubrí esta manera de aplicar varias funciones al mismo array, tarde, pero sí.
  console.log(fraseReves); //comprobación

  if (fraseDerecho == fraseReves) {
    alert('La frase introducida es un palíndromo');
  } else if (fraseDerecho !== fraseReves) {
    alert('La frase introducida no es un palíndromo');
  }
}
palindromeTwo();
*/

