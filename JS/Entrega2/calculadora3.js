"use strict";
let resultado;
let valor1 = +prompt('Introduce un número');
let valor2 = +prompt('Introduce otro número');
let operador = prompt(
  ' 🤓 Introduce + para sumar, - para restar, * para multiplicar, / para dividir y el número 2 para elevar al cuadrado'
);
while (operador != '+' && operador != '-' && operador != '*' && operador != '/' && operador != '2') {
  alert('🤓 Debes introducir un operador válido');
  operador = prompt(
    ' 🤓 Introduce + para sumar, - para restar, * para multiplicar, / para dividir y el número 2 para elevar al cuadrado'
  );
}

switch (operador) {
  case '+':
    resultado = valor1 + valor2;
    break;
  case '-':
    resultado = valor1 - valor2;
    break;
  case '/':
    resultado = valor1 / valor2;
    break;
  case '*':
    resultado = valor1 * valor2;
    break;
  case '2':
    resultado = Math.pow(valor1, valor2);
    break;
}

alert('El resultado es ' + resultado );
