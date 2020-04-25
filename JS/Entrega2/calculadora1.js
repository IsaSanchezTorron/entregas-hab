'use strict';


function introducirNum() {
  let valor1 = +prompt('Introduce un número del 1 al 10');
  if (valor1 == null || valor1 == '') {
    alert('Debes introducir algún valor');
    valor1 = +prompt('Introduce un número del 1 al 10');
  }
  return valor1;
}

function introducirNum2() {
  let valor2 = +prompt('Introduce otro número del 1 al 10');
  if (valor2 == null || valor2 == '') {
    alert('Debes introducir algún valor');
    valor2 = +prompt('Introduce un número del 1 al 10');
  }
  return valor2;
}

function darResultados(valor1, valor2) {
  let suma = valor1 + valor2;
  alert('la suma es ' + suma);
  let resta = valor1 - valor2;
  alert('la resta es ' + resta);
  let multiplicar = valor1 * valor2;
  alert('la multiplicacion es ' + multiplicar);
  let dividir = valor1 / valor2;
  alert('la division es ' + dividir);
  let exponenciar = Math.pow(valor1, valor2);
  alert(valor1 + ' elevado a ' + valor2 + ' es ' + exponenciar);
}

darResultados(introducirNum(), introducirNum2());

