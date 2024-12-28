const frm = document.querySelector("form")
const rspNome = document.querySelector(".outNomeMedicamento")
const rspPromo = document.querySelector(".outPromocao")


frm.addEventListener("submit", (e) => {
    const nomeMedicamente = frm.inNomeMedicamento.value
    const valorMedicamento = Number(frm.inValorMedicamento.value)
    const promocao = Math.floor(valorMedicamento * 2)

    rspNome.innerText = `Promoção de ${nomeMedicamente}`
    rspPromo.innerText = `Leve 2 por R$${promocao.toFixed(2)}`

    e.preventDefault()
})