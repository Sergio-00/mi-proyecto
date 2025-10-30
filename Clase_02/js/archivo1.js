// Un archivo .js con el código funcional que defina variables
// y devuelva como resultado en consola: hola el nombre de la persona.

import promptSync from "prompt-sync";
const prompt = promptSync();

let user = prompt("Ingresa tu nombre: ");
console.log(`Hola ${user}`);
