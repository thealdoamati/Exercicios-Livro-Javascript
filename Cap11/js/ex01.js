const frm = document.querySelector("form")
const respLista = document.querySelector("pre")
const respCavalo = document.querySelector("#outCavalo")

const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"]

const apostas = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const cavalo = Number(frm.inCavalo.value)
    const valor = Number(frm.inValor.value)

    apostas.push({ cavalo, valor })

    let lista = `Apostas Realizadas\n${"_".repeat(25)}\n`

    for (const aposta of apostas) {
        lista += `No ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`
        lista += ` - R$: ${aposta.valor}\n`
    }

    respLista.innerText = lista

    frm.reset()
    frm.inCavalo.focus()
})

const obterCavalo = (num) => {
    const posicao = num - 1
    return CAVALOS[posicao]
}

frm.inCavalo.addEventListener("blur", () => {
    if(frm.inCavalo.value == "") {
        respCavalo.innerText= ""
        return
    }

    const numCavalo = Number(frmInCavalo.value)

    if(!validarCavalo(numCavalo)) {
        alert("num do cavalo inválido")
        frm.inCavalo.focus()
        return
    }

    const nome = obterCavalo(numCavalo)
    const contaNum = contarApostas(numCavalo)
    const total = totalizarApostas(numCavalo)

    respCavalo.innerText = `${nome} (Apostas: ${contaNum} - R$: ${total.toFixed(2)})`
})