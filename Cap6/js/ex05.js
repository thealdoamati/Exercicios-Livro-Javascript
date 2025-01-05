// Descobrindo os alunos em destaque
const prompt = require("prompt-sync")()
console.log("Informe os alunos. Após, digite 'Fim' no nome para sair")

const alunos = []

do {
    const nome = prompt('Digite o nome do aluno:')

    if (nome === "fim" | nome === "Fim") {
        break
    }

    const nota = Number(prompt('Digite a nota do aluno:'))

    alunos.push({nome, nota})
    console.log(`Ok, aluno ${nome} cadastrado!`)

} while (true)

console.log("-".repeat(40))

const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0) // Obtendo a maior nota
console.log('Maior nota: ' + maior)

if (maior >= 7){
    const alunosMaiorNota = alunos.filter(aluno => aluno.nota === maior)

    for (const alunoMaior of alunosMaiorNota) {
        console.log("- " + alunoMaior.nome)
    }

} else {
    console.log("Não existem alunos em destaque.")
}