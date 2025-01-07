const frm = document.querySelector("form")
const rsp = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nomeCompleto = frm.inNome.value

    const primEsp = nomeCompleto.indexOf(" ")
    const ultimoEsp = nomeCompleto.lastIndexOf(" ")

    console.log(primEsp, ultimoEsp)

    const primeiroNome = nomeCompleto.substr(0, primEsp)
    const ultimoNome = nomeCompleto.substr(ultimoEsp)

    rsp.innerText = `Crachá: ${primeiroNome} ${ultimoNome}`

})