const prompt = require("prompt-sync")()

console.log("Insira o valor para sacar do caixa. Digite 0 para receber o resumo.")
console.log("-".repeat(40))

const saquesTotais = []
let saquesInvalidos = 0

// Usar filter para filtrar os saques válidos e reduce para somar os saques
// Número de tentativas de saques inválidos

do {
    const saques = Number(prompt("Insira o valor que deseja sacar:"))
    if (saques === 0) {
        break
    }
    
    saquesTotais.push(saques)

    if (saques % 10 !== 0) {
        console.log("Erro. Valor Inválido (deve ser múltiplo de 10)")
        saquesInvalidos += 1
    }

} while (true)

const saquesValidos = saquesTotais.filter(saque => saque % 10 === 0)

const totalSaques = saquesValidos.reduce((acumulador, saque) => acumulador + saque, 0)

console.log(`\nSaques Válidos\n${"-".repeat(40)}`)

saquesValidos.map(saque => console.log(`R$${saque.toFixed(2)}`))

console.log("-".repeat(40))
console.log(`Total dos Saques: R$${totalSaques.toFixed(2)}`)
console.log(`Num. de Tentativas de Saques (saques inválidos) :${saquesInvalidos}`)
