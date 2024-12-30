const prompt = require("prompt-sync")()
const valorDaCompra = Number(prompt("Valor da compra: R$"))

const divisao = Math.floor(valorDaCompra / 20)

const parcelas = divisao == 0 ? 1 : divisao > 6 ? 6 : divisao

valorFinal = valorDaCompra / parcelas

console.log(`O pagamento pode ser feito em até ${parcelas} de R$${valorFinal.toFixed(2)}`)
