import promptSync from "prompt-sync";
const prompt = promptSync();

function checkError(error) {
  console.log("Ocurrió un error:", error.message);
}

export function checkNumber() {
  const num = parseInt(prompt("Ingresa un número entero: "));
  try {
    if (isNaN(num)) {
      throw new Error("No es un número válido.");
    }

    console.log(`${num} es un número valido.`);
  } catch (error) {
    checkError(error);
  }
}

checkNumber();
