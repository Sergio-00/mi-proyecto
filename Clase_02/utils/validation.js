import promptSync from "prompt-sync";
const prompt = promptSync();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const email = prompt("Ingresa tu correo: ");

if (!email) {
  console.log("El email esta vacio.");
} else if (emailRegex.test(email) === false) {
  console.log("El email es invalido.");
} else {
  console.log("El email es valido.");
}
