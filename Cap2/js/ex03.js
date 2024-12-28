const frm = document.querySelector("form")
const rspName = document.querySelector(".outVeiculoName")
const rspEntrada = document.querySelector(".outVeiculoEntrada")
const rspParcela = document.querySelector(".outVeiculoParcela")


frm.addEventListener("submit", (e) => {
    const veiculoName = frm.inVeiculoName.value
    const veiculoPreco = Number(frm.inVeiculoPreco.value)

    const valorEntrada = veiculoPreco * 0.5
    const parcelasDozeVezes = (veiculoPreco - valorEntrada) / 12

    rspName.innerText = `Promoção: ${veiculoName}`
    rspEntrada.innerText = `Entrada de R$${valorEntrada.toFixed(2)}`
    rspParcela.innerText = `+12x de R$${parcelasDozeVezes.toFixed(2)}`


    e.preventDefault()
})