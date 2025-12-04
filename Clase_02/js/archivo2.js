// Un archivo.js con el código funcional que refleje su nombre,
// notas para tres materias, el promedio de las materias y si
// aprobó o no aprobó con nota mínima 3.5.

import promptSync from 'prompt-sync';
const prompt = promptSync();

const nombre = prompt('Ingresa tu nombre: ');
const notas = [];
let suma = 0;

for (let i = 0; i < 3; i++) {
  let nota = Number(prompt(`Ingresa la nota #${i + 1}: `));
  suma += nota;
  notas.push(nota);
}

const promedio = Number(suma / notas.length).toFixed(2);
const aprobado = promedio >= 3.5;

console.log(`\nNombre: ${nombre}`);
console.log(`Notas: ${notas.join(' - ')}`);
console.log(`Promedio: ${promedio}`);
console.log(`Estado: ${aprobado ? 'APROBADO' : 'NO APROBADO'}`);
