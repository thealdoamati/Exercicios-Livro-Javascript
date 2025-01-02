// Impressão de etiquetas
const prompt = require("prompt-sync")();
console.log("Imprimir etiquetas");
console.log("------------------------------------------------");
const produto = prompt("Nome do produto:");
const num = Number(prompt("N° de etiquetas:"));

// Começa em 1 pois quando chegar em 1 usamos o if seguinte
// num é dividido por 2 pois vamos ter 2 por linha
for (let i = 1; i <= num / 2; i++) {
    //Adicionando um espaço de 30 após nome do produto
  console.log(`${produto.padEnd(30)}${produto.padEnd(30)}`);
}
// Se a quantidade for impar:
if (num % 2 === 1) {
    console.log(`${produto}`)
}
