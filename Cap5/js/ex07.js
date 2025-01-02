const prompt = require("prompt-sync")();
console.log("Quantidade de chincilas por ano");
console.log("------------------------------------------------");
const chinchilas = Number(prompt("N° Chincilas:"));
const anos = Number(prompt("N° Anos:"));

if(chinchilas < 2) {
  console.log("Volte quando você tiver a partir de 2 chinchilas")
  return
}

let chinchilasPorAno = chinchilas
let chinchilasList = `1° Ano: ${chinchilas} Chinchilas \n`

for (let i = 1; i < anos; i++) {
  chinchilasPorAno = chinchilasPorAno * 3

  chinchilasList = chinchilasList + (i + 1) + "° Ano: " +  chinchilasPorAno + ' Chinchilas \n'
}

console.log(chinchilasList)