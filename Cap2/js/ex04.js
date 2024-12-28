const frm = document.querySelector("form")
const rsp = document.querySelector(".outValorAPagar")


frm.addEventListener("submit", (e) => {
    const valorKilo = Number(frm.inValorKilo.value) / 1000 // Passando pra gramas
    const consumoCliente = Number(frm.inConsumoCliente.value)
    const valorAPagar = consumoCliente * valorKilo

    rsp.innerText = `Valor a pagar R$${valorAPagar.toFixed(2)}`


    e.preventDefault()
})