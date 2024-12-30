const prompt = require("prompt-sync")()
const pessoas = Number(prompt("N° Pessoas: "))
const peixes = Number(prompt("N° Peixes: "))

let custo

if(peixes > pessoas) {
    const valorPeixesExtras = (peixes - pessoas) * 12
    custo = (20 * pessoas) + valorPeixesExtras
    console.log(`Custo dos peixes extras: R$${valorPeixesExtras.toFixed(2)}`)
} else {
    custo = (20 * pessoas)
}


console.log(`Custo total: R$${custo.toFixed(2)}`)