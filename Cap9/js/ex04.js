const frm = document.querySelector("form")
const rsp = document.querySelector("pre")

let produtosList = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const produto = frm.inProduto.value

    adicionarProduto(produto)


})

const adicionarProduto = (produto) => {
    if(produto === ""){
        rsp.innerText = ""
        produtosList = []
        return
    } 

    const produtoPronto = primeiraMaiscula(produto)
    produtosList.push(produtoPronto)

    const desorderedProducts = produtosList
    const orderedProducts = desorderedProducts.sort()

    let linhas = ""

    for (let i = 0; i < orderedProducts.length; i++) {       
        linhas += orderedProducts[i] + "\n"
    }
    

    rsp.innerText = "Produtos Adicionados\n" + "-".repeat(40) + "\n" + linhas
}

const primeiraMaiscula = (produto) => {
    const primeiraLetra = produto.slice(0,1)
    return primeiraLetra.toUpperCase() + produto.substring(1)
}

frm.btLimpar.addEventListener("click", () => {
    adicionarProduto("")
})