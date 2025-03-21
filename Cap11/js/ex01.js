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
    if (frm.inCavalo.value == "") {
        respCavalo.innerText = ""
        return
    }

    const numCavalo = Number(frm.inCavalo.value)

    if (!validarCavalo(numCavalo)) {
        alert("num do cavalo inválido")
        frm.inCavalo.focus()
        return
    }

    const nome = obterCavalo(numCavalo)
    const contaNum = contarApostas(numCavalo)
    const total = totalizarApostas(numCavalo)

    respCavalo.innerText = `${nome} (Apostas: ${contaNum} - R$: ${total.toFixed(2)})`
})

const validarCavalo = (num) => {
    // Retorna condigação true ou false
    return num >= 1 && num <= CAVALOS.length
}

const contarApostas = (num) => {
    let contador = 0
    for (const aposta of apostas) {
        if (aposta.cavalo == num) {
            contador++
        }
    }
    return contador
}

const totalizarApostas = (num) => {
    let total = 0
    for (const aposta of apostas) {
        if (aposta.cavalo == num) {
            total += aposta.valor
        }
    }
    return total
}

frm.inCavalo.addEventListener("focus", () => {
    frm.inCavalo.value = ""
    respCavalo.innerText = ""
})

frm.btResumo.addEventListener("click", () => {
    const somaApostas = [0, 0, 0, 0, 0, 0]

    for (const aposta of apostas) {
        // - 1 por que começa com 0
        somaApostas[aposta.cavalo - 1] += aposta.valor
    }

    let resposta = `No Cavalo........... R$ Apostado\n${"-".repeat(35)}\n`
    CAVALOS.forEach((cavalo, i) => {
        resposta += `${i + 1} ${cavalo.padEnd(20)}`
        resposta += `${somaApostas[i].toFixed(2).padStart(11)}\n`
    })
    respLista.innerText = resposta
})

frm.btGanhador.addEventListener("click", () => {
    const ganhador = Number(prompt("No. Cavalo Ganhador"))

    if (isNaN(ganhador) || validarCavalo(ganhador)){
        alert("Cavalo Inválido")
        return
    }

    const total = apostas.reduce((acumulador, aposta) => acumulador + aposta.valor, 0)

    let resumo = `Resultado Final do Páreo\n${"-".repeat(30)}\n`
    resumo += `No. Total de Apostas: ${apostas.length}\n`
    resumo += `Total Geral R$: ${total.toFixed(2)}\n\n`
    resumo += `Ganhador No ${ganhador} - ${obterCavalo(ganhador)}\n\n`
    resumo += `No. de Apostas: ${contarApostas(ganhador)}\n`
    resumo += `Total Apostado R$: ${totalizarApostas(ganhador).toFixed(2)}`

    respLista.innerText = resumo

    frm.btApostar.disabled = true
    frm.btGanhador.disabled = true
    frm.btNovo.focus()
})

frm.btNovo.addEventListener("click", () => {
    window.location.reload()
})