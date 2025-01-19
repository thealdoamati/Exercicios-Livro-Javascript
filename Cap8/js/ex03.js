const frm = document.querySelector("form")
const inConvenioGroup = document.getElementById('inConvenioGroup');
const rsp = document.querySelector("h3")
const rsp2 = document.querySelector("h4")

frm.rbSim.addEventListener("click", () => {
    inConvenioGroup.className = "exibe"
})

frm.rbNao.addEventListener("click", () => {
    inConvenioGroup.className = "oculta"
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(frm.inValor.value)

    let convenio
    if (frm.rbSim.checked) {
        const num = frm.inConvenio.selectedIndex
        convenio = frm.inConvenio.options[num].text
    }

    const desconto = calcularDesconto(convenio, valor)
    const valorComDesconto = valor - desconto

    rsp.innerText = "Desconto R$: " + desconto
    rsp2.innerText = "A Pagar R$: " + valorComDesconto
})

function calcularDesconto(convenio, valor) {
    if(convenio === "Saúde Animal") {
        return valor * 0.5
    } else if (convenio === "Amigo dos Animais") {
        return valor * 0.2
    } else {
        return valor * 0.1
    }
}