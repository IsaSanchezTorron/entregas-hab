'use strict';


let valor1 = +prompt('Introduce un número');
let operador = prompt(
  ' 🤓 Introduce + para sumar, - para restar, * para multiplicar, / para dividir y el número 2 para elevar al cuadrado'
);
while (operador != '+' && operador != '-' && operador != '*' && operador != '/' && operador != '2') {
  alert('🤓 Debes introducir un operador válido');
  operador = prompt(
    ' 🤓 Introduce + para sumar, - para restar, * para multiplicar, / para dividir y el número 2 para elevar al cuadrado'
  );
}

let valor2 = +prompt('Introduce otro número del 1 al 10');

let resultado;

if (operador == '+') {
  resultado = valor1 + valor2;
} else if (operador == '-') {
  resultado = valor1 - valor2;
} else if (operador == '*') {
  resultado = valor1 * valor2;
} else if (operador == '/') {
  resultado = valor1 / valor2;
} else if (operador == '2') {
  resultado = Math.pow(valor1, valor2);
}

alert('El resultado es ' + resultado);
