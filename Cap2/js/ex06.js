const frm = document.querySelector("form")
const rsp = document.querySelector(".outValorAPagar")


frm.addEventListener("submit", (e) => {
    const valorMinutos = Number(frm.inValorMinutos.value)
    const tempoDeUso = Number(frm.inTempoDeUso.value)

    const horasACobrar = Math.ceil(tempoDeUso / 15)
    const valorACobrar = horasACobrar * valorMinutos

    rsp.innerText = `Valor a Pagar R$${valorACobrar.toFixed(2)}`

    e.preventDefault()
})