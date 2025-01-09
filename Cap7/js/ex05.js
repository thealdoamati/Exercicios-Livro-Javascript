const prompt = require("prompt-sync")()

const anoAtual = new Date().getFullYear()
const idade = Number(prompt(`Digite quantos anos você faz em ${anoAtual}? :`))

const anoDeNascimento = anoAtual - idade

console.log(`Você nasceu em ${anoDeNascimento}`)