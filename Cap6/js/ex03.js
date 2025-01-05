const frm = document.querySelector("form")
const rsp = document.querySelector("h4")
const rspCarrosAdicionados = document.querySelector("h5")

const listaCarros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const modelo = frm.inModelo.value
    const preco = Number(frm.inPrice.value)

    listaCarros.push({modelo, preco})
    console.log((listaCarros))

    frm.inModelo.value = ""
    frm.inPrice.value = ""

    rspCarrosAdicionados.innerText = `Carros Adicionados: ${listaCarros.length}`
})

frm.btnListar.addEventListener("click", () => {
    
    // Não esqueça da , depois contendo 0 (quando for a soma de valor), ou "" quando for concatenar strings
    const lista = listaCarros.reduce((acumulador, carro) => acumulador + carro.modelo + " - R$" + carro.preco.toFixed(2) + "\n", "")

    const listaTitle = `Lista dos Carros Cadastrados \n`
    const separacaoTitle = `${"-".repeat(40)}\n`

    rsp.innerText = listaTitle + separacaoTitle + lista
})

frm.btnFiltrar.addEventListener("click", () => {
    
    const listaFiltered = listaCarros.sort((a, b) => a.preco - b.preco)

    const lista = listaFiltered.reduce((acumulador, carro) => acumulador + carro.modelo + " - R$" + carro.preco.toFixed(2) + "\n", "")


    const listaTitle = `Lista dos Carros Cadastrados (Filtrados por preço) \n`
    const separacaoTitle = `${"-".repeat(40)}\n`

    rsp.innerText = listaTitle + separacaoTitle + lista
})

frm.btnPromo.addEventListener("click", () => {
    const desconto = Number(prompt("Qual o percentual de desconto?")) / 100

    if(desconto === 0){
        alert("Não é possível aplicar 0% de desconto")
    }

    const listaComDesconto = listaCarros.reduce((acumulador, carro) => 
        acumulador + 
        carro.modelo + " - R$" + (carro.preco.toFixed(2) - (carro.preco.toFixed(2) * desconto)) 
        + "\n"
        , ""
    )

    const listaTitle = `Lista dos Carros Cadastrados (Filtrados por preço) \n`
    const separacaoTitle = `${"-".repeat(40)}\n`

    rsp.innerText = listaTitle + separacaoTitle + listaComDesconto
    
})