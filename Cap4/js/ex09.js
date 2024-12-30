const prompt = require("prompt-sync")()
const number = Number(prompt("Digite um número:"))

const parOuImpar = number % 2 === 0 ? 'Par' : 'Ímpar'

console.log(number, 'é', parOuImpar)
