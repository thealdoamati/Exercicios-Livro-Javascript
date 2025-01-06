const frm = document.querySelector("form")
const rsp = document.querySelector("h4")
const rspAviso = document.querySelector("h5")

const clubes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const clube = frm.inClube.value
    clubes.push(clube)

    frm.inClube.value = ""
})

frm.btnListar.addEventListener("click", () => {
    if (clubes.length === 0) {
        rsp.innerText = "Você não possui nem um clube listado."
    } else {
        const listaClubes = clubes.reduce((todos, clube) => todos + clube + "\n", "")
        rsp.innerText = listaClubes
    }
})

frm.btnTabela.addEventListener("click", () => {
    if (clubes.length % 2 !== 0) {
        rsp.innerText = "Você precisa de um número de clubes par para montar a sua tabela de jogos."
    } else {
        const clubesReverse = [...clubes].reverse()

        let partida = ""
        const clubesJaJogados = []

        // percorremos metade dele pois no final o array é o mesmo, porém invertido
        for (let i = 0; i < clubes.length / 2; i++) {
            if (clubes[i] === clubesReverse[i] || clubesJaJogados.includes(clubes[i]) || clubesJaJogados.includes(clubesReverse[i])) {
                rspAviso.innerText = `Não podem existir times duplicados`
                break
            } else {
                partida += clubes[i] + " X " + clubesReverse[i] + "\n"
                clubesJaJogados.push(clubes[i])
                clubesJaJogados.push(clubesReverse[i])
            }
        }

        rsp.innerText = partida
    }
})