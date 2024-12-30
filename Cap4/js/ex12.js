// Simulador de parquimetro
const prompt = require("prompt-sync")()
const valor = Number(prompt("Digite o valor:"))

const tempo = valor >= 3 ?  120 : valor >= 1.75 ? 60 : 30
const troco = valor >= 3 ?  valor - 3 : valor >= 1.75 ? valor - 1.75 : valor - 1

console.log(`Tempo: ${tempo} min`)
console.log(`Troco: R$${troco.toFixed((2))}`)
