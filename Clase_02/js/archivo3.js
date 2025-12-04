// Un archivo.js con el código funcional de números pares
// e impares que me arroje en consola el listado de los
// números pares e impares del 1 al 30.

console.log('Numeros pares:');
for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log('\nNumeros impares:');
for (let i = 1; i <= 30; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
