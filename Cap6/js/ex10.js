const frm = document.querySelector("form")
const rsp = document.querySelector("h4")

const candidatos = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const nome = frm.inCandidato.value
    const acertos = frm.inAcertos.value

    candidatos.push({nome, acertos})

    frm.inCandidato.value = ""
    frm.inAcertos.value = ""
})

frm.btnListar.addEventListener("click", () => {
    if (candidatos.length === 0) {
        rsp.innerText = "Você precisa adicionar pelo menos 1 candidato."
    } else {
        const candidatosList = candidatos.reduce((ac, candidato) => ac + candidato.nome + ' - ' + candidato.acertos + ' acertos\n', '')
        rsp.innerText = candidatosList
    }
})

frm.btnAprovados.addEventListener("click", () => {
    const notaMinima = Number(prompt("Número de Acertos para Aprovação?"))

    if(notaMinima === 0){
        alert("Não é possível aplicar nota 0")
        return
    }

    const candidatosFilter = candidatos.filter(candidato => candidato.acertos >= notaMinima)

    if(candidatos.length === 0) {
        rsp.innerText = "Você precisa adicionar pelo menos 1 candidato."       
    } else if(candidatosFilter.length === 0) {
        rsp.innerText = "Nenhum candidato foi aprovado."
    } else {
        const candidatosListFilter = candidatosFilter.reduce((ac, candidato) => ac + candidato.nome + ' - ' + candidato.acertos + ' acertos\n', '')
        rsp.innerText = candidatosListFilter
    }
})