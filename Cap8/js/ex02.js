const frm = document.querySelector("form")
const rsp = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value

    const isNomeValid = validarNome(nome)

    if (isNomeValid === true) {
        const sobrenome = obterSobrenome(nome)
        const vogais = contarVogais(nome)

        rsp.innerText = "Senha Inicial: " + sobrenome + vogais
    } else {
        alert("Digite o nome completo do aluno")
        frm.inNome.focus()
    }
    frm.inNome.value = ""
})

function validarNome(nome) {
    const espaco = nome.indexOf(" ")
    if (espaco === -1) {
        return false
    } else {
        return true
    }
}

function obterSobrenome(nome) {
    const ultimoEspaco = nome.lastIndexOf(" ")
    const ultimoNome = nome.substr(ultimoEspaco).toLowerCase()
    return ultimoNome
}

function contarVogais(nome) {
    const nomeSemAcento = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    const vogais = []
    for (letra of nomeSemAcento) {
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            vogais.push(letra)
        }
    }
    const contagemVogais = vogais.length > 10 ? vogais.length : "0" + vogais.length
    return contagemVogais
}

