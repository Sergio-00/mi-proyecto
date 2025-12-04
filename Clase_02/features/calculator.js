import promptSync from 'prompt-sync';
const prompt = promptSync();

const valor1 = parseFloat(prompt('Elije el primer valor: '));
const valor2 = parseFloat(prompt('Elije el segundo valor: '));

const resultado = valor1 + valor2;

console.log(resultado);
