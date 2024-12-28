const frm = document.querySelector('form')
const rspMedia = document.querySelector('#outMedia')
const rspStatus = document.querySelector('#outStatus')

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nomeAluno = frm.inNomeAluno.value
    const notaUm = Number(frm.inNotaUm.value)
    const notaDois = Number(frm.inNotaDois.value)

    const media = (notaUm + notaDois) / 2

    rspMedia.innerText = `Média do Aluno: ${media}`

    if(media > 7) {
        rspStatus.innerText = `Parabéns, ${nomeAluno}! Você foi aprovado(a).`
        rspStatus.style.color = "green"
    } else {
        rspStatus.innerText = `Que pena, ${nomeAluno}. Você foi reprovado.`
        rspStatus.style.color = "red"
    }
})