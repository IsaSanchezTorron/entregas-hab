'use strict';

let puntuacionTotal = 0;

for (let i = 1; i <= 50; i++) {
  let a = Math.floor(Math.random() * (6 - 1 + 1) + 1);

  if (puntuacionTotal >= 50) {
    console.log('¡Enhorabuena, ha salido un ' + a + ' ¡Has ganado con un total de ' + puntuacionTotal + ' puntos');
    break;
  } else {
    console.log('Llevas un total de ' + puntuacionTotal + ' puntos');
  }
  console.log('Esta es tu tirada número ' + i + ' Has sacado un ' + a);
  puntuacionTotal = a + puntuacionTotal;
}
