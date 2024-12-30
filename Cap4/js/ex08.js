const prompt = require("prompt-sync")()
const number = Number(prompt("Digite um número:"))

if (number < 100 || number >= 1000) {
    console.log("Você deve digitar um número maior que 100 e menor que 1000")
    return
}

const num1 = Math.floor(number / 100)
const sobra = number % 100 // O que sobra (Dezena)
const num2 = Math.floor(sobra / 10)
const num3 = sobra % 10

console.log(`Número invertido: ${num3}${num2}${num1}`)