const frm = document.querySelector("form")
const rsp = document.querySelector("h4")
const rspNumeracao = document.querySelector("h5")

const criancas = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)

    criancas.push({nome, idade})

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