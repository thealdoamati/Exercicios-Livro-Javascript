// Filas de banco
const prompt = require("prompt-sync")()
console.log("Digite o nome e a idade dos clientes do banco. Digite 'Fim' para resumir.")

const clientes = []

do {
    const nome = prompt("Digite o nome do cliente:")
    if (nome === "fim" | nome === "Fim") {
        break
    }
    const idade = prompt("Digite a idade do cliente:")

    clientes.push({ nome, idade })

    console.log(`Cliente ${nome} inserido com sucesso!`)

} while (true)

const filaPreferencial = clientes.filter(cliente => cliente.idade > 60)

if (filaPreferencial.length > 0) {
    console.log("\nFila Preferencial")
    console.log("-".repeat(40))
    filaPreferencial.forEach((fila, i) => console.log(`${i + 1} - ${fila.nome}\n\n`))
}

const filaNormais = clientes.filter(cliente => cliente.idade < 60)

if (filaNormais.length > 0) {
    console.log("Fila Normal")
    console.log("-".repeat(40))
    filaNormais.forEach((fila, i) => console.log(`${i + 1} - ${fila.nome}`))
}


