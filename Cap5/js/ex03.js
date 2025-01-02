// Anos de copa do mundo
const prompt = require("prompt-sync")()
console.log("Programa Anos de Copa do Mundo. Digite 0 pra sair.")
console.log("------------------------------------------------")

do {
    const ano = Number(prompt("Ano:"))
    if(ano === 0){
        break
    } else if(ano === 1946 && ano === 1942) {
        console.log(`Não houve copa em ${ano}. (Segunda Guerra Mundial)`)
    } else if(ano >= 1930 && ano % 4 == 2) {
        console.log(`Sim! O ano ${ano} teve copa do mundo.`)
    } else {
        console.log(`O ${ano} não teve copa do mundo.`)
    }

} while (true)
