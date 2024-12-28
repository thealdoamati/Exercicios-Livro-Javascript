const frm = document.querySelector("form")
const rspNome = document.querySelector(".outNomeProduto")
const rspPromo = document.querySelector(".outPromocao")


frm.addEventListener("submit", (e) => {
    const nomeProduto = frm.inNomeProduto.value
    const valorProduto = Number(frm.inValorProduto.value)
    const desconto = valorProduto * 0.5
    const promocao = (valorProduto * 2 + desconto)

    rspNome.innerText = `${nomeProduto} - Promoção: Leve 3 por R$${promocao.toFixed(2)}`
    rspPromo.innerText = `O 3o produto custa apenas R$${desconto.toFixed(2)}`

    e.preventDefault()
})