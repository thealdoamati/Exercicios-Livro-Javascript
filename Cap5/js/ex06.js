// Numéro de frutas
const prompt = require("prompt-sync")();
console.log("Quantidade de frutas");
console.log("------------------------------------------------");
const fruta = prompt("Nome da fruta:");
const num = Number(prompt("Númeor:"));


let frutas = ""
for (let i = 1; i <= num; i++) {
  const separacao = i === num ? '' : ' * '
  frutas = frutas + fruta + separacao
}

console.log(frutas)