const frm = document.querySelector("form")
const respLista = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const peso = frm.inPeso.value

    if (verApostaExiste(peso)) {
        alert("Alguém já apostou este peso, informe outro...")
    }

    if (localStorage.getItem("melanciaNome")) {
        //obtém conteúdo já salvo e acrescenta ";" + nome
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso

        localStorage.setItem("melanciaNome", melanciaNome)
        localStorage.setItem("melanciaPeso", melanciaPeso)
    } else {
        localStorage.setItem("melanciaNome", nome)
        localStorage.setItem("melanciaPeso", peso)
    }

    mostrarApostas()
    frm.reset()
    frm.inNome.focus()
})

const verApostaExiste = (peso) => {
    if (localStorage.getItem("melanciaPeso")) {
        const pesos = localStorage.getItem("melanciaPeso").split(";")
        return pesos.includes(peso.toString())
    } else {
        return false
    }
}

const mostrarApostas = () => {
    if (!localStorage.getItem("melanciaNome")) {
        // Limpa o espaço de exibição das apostas (Quando "Limpar Apostas")
        respLista.innerText = ""
        // Não executa o resto do código
        return
    }

    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")

    let linhas = ""

    for (let i = 0; i < nomes.length; i++) {
        linhas += nomes[i] + " - " + pesos[i] + "gr \n"
    }

    respLista.innerText = linhas
}

// Chama a função quando a página é carregada
window.addEventListener("load", mostrarApostas)

frm.btVencedor.addEventListener("click", () => {
    if (!localStorage.getItem("melanciaNome")) {
        alert("Não há apostas cadastradas")
        return
    }

    const pesoCorreto = Number(prompt("Qual o peso correto da melancia?"))

    // Se não informou
    if (pesoCorreto === 0 || isNaN(pesoCorreto)) {
        return
    }

    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")

    // valor inicial para o vencedor é o da primeira aposta
    let vencedorNome = nomes[0]
    let vencedorPeso = pesos[0]

    for (let i = 0; i < nomes.length; i++) {
        // calcula a diferença de peso do "vencedor"(que está armazenado no let) e da aposta atual atual"
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto)
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto)

        if (difAposta < difVencedor) {
            vencedorNome = nomes[i]
            vencedorPeso = pesos[i]
        }        
    }

    let mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr"
    mensagem += "\n" + "-".repeat(40)
    mensagem += "\nVencedor: " + vencedorNome
    mensagem += "\nAposta: " + vencedorPeso + "gr"

    alert(mensagem)
})

frm.btLimpar.addEventListener("click", () => {
    if (confirm("Confirma exclusão de todas as apostas?")) {
        localStorage.removeItem("melanciaNome")
        localStorage.removeItem("melanciaPeso")

        mostrarApostas()
    }
})