('use strict');

function calcularMedia(a, b, c) {
  let mediaPuntuacionesEquipo = (a + b + b) / 3;
  return mediaPuntuacionesEquipo;
}

let mediaEquipoMaria = calcularMedia(62, 34, 45);
let mediaEquipoPaula = calcularMedia(35, 60, 59);
let mediaEquipoRebeca = calcularMedia(40, 39, 63);

console.log(`La media del equipo de María es ${mediaEquipoMaria}`);
console.log(`La media del equipo de Paula es ${mediaEquipoPaula}`);
console.log(`La media del equipo de Rebeca es ${mediaEquipoRebeca}`);

if (mediaEquipoMaria > mediaEquipoPaula && mediaEquipoMaria > mediaRebeca) {
  console.log('Gana el equipo de María con una media de ' + mediaEquipoMaria);
}

if (mediaEquipoPaula > mediaEquipoMaria && mediaEquipoPaula > mediaEquipoRebeca) {
  console.log('Gana el equipo de Paula con una media de ' + mediaEquipoPaula);
}

if (mediaEquipoRebeca > mediaEquipoMaria && mediaEquipoRebeca > mediaEquipoPaula) {
  console.log('Gana el equipo de Rebeca con una media de ' + mediaEquipoRebeca);
