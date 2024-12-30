const frm = document.querySelector("form")
const rsp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    let decrescentes = ""

    for(let i = numero; i > 1 ; i--) {
        decrescentes = decrescentes + i + ", "
    }
    decrescentes = decrescentes + "1."

    rsp.innerText = `Entre ${numero} e 1: ${decrescentes}`
})