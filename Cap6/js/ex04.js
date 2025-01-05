const frm = document.querySelector("form")
const rsp = document.querySelector("h4")
const rspNumeracao = document.querySelector("h5")

const criancas = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)

    criancas.push({ nome, idade })

    frm.inNome.value = ""
    frm.inIdade.value = ""

    rspNumeracao.innerText = `Crianças Adicionadas: ${criancas.length}`
})

frm.btnListar.addEventListener("click", () => {
    const lista = criancas.reduce((acumulador, crianca) =>
        acumulador +
        crianca.nome + ' - ' + crianca.idade + " anos \n",
        ""
    )

    rsp.innerText = lista
})

frm.btnFiltrar.addEventListener("click", () => {
    const listaFiltrada = criancas.sort((a, b) => a.idade - b.idade)

    const lista = listaFiltrada.reduce((acumulador, crianca) =>
        acumulador +
        crianca.nome + ' - ' + crianca.idade + " anos \n",
        ""
    )

    rsp.innerText = lista
})

frm.btnResumir.addEventListener("click", () => {
    const copia = [...criancas]
    copia.sort((a, b) => a.idade - b.idade)

    let resumo = ""
    let idadeAux = copia[0].idade // menor idade do vetor orderado
    let nomes = [] // armazenando os nomes de cada criança
    for (const crianca of copia) {
        const { nome, idade } = crianca
        
        // Precisamos dessa validação if pra diferenciar uma idade da idade anterior, se não sempre vai achar que é a mesma idade
        if (idade === idadeAux) {
            // Aqui é quando estamos clicando em resumo, a ultima idade enviada
            nomes.push(nome)
        } else {
            resumo += idadeAux + " anos(s):" + nomes.length + ' criança(s) - '
                + ((nomes.length / copia.length) * 100).toFixed(2) + '%\n'
                + "( " + nomes.join(`, `) + ")\n\n"
            idadeAux = idade // obtem nova idade
            nomes = [] // zerando os nomes
            nomes.push(nome)
        }
    }

    // Aqui é quando estamos clicando em resumo, a ultima idade enviada
    resumo += idadeAux + " anos(s):" + nomes.length + ' criança(s) - '
        + ((nomes.length / copia.length) * 100).toFixed(2) + '%\n\n'
        + "( " + nomes.join(`, `) + ")\n"
    rsp.innerText = resumo
})