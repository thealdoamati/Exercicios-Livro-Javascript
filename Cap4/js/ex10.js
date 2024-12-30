const prompt = require("prompt-sync")()
const velocidadePermitida = Number(prompt("Digite a velocidade permitida:"))
const velocidadeDoCondutor = Number(prompt("Digite a velocidade do condutor:"))

const acimaDaVelocidade = velocidadePermitida + (velocidadePermitida * 0.2)

const multa = velocidadeDoCondutor > acimaDaVelocidade ? 'Multa Grave' : velocidadeDoCondutor > velocidadePermitida ? 'Multa leve' : 'Sem Multa'

console.log(multa)
