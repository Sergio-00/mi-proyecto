// Un archivo.js con el código funcional que nos muestre en
// consola si los números que digitamos son pares o impares
// y sube el commit a GitHub.

import promptSync from 'prompt-sync';
const prompt = promptSync();

let num = prompt('Elije un número: ');

if (num % 2 === 0) {
  console.log(`${num} es par`);
} else {
  console.log(`${num} es impar`);
}
