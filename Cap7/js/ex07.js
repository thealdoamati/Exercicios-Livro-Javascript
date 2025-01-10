const prompt = require("prompt-sync")()

const formula = prompt("Insira aqui uma fórmula matemática :")

let abre = 0
let fecha = 0
for (const valor of formula) {
  if(valor === "(") {
    abre += 1
  } else if(valor === ")") {
    fecha += 1
  }
}

console.log(formula)

if (abre === fecha) {
  console.log("OK, fórmula correta.")
} else {
  console.log("Formula incorreta")
}
