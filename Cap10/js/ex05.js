const frm = document.querySelector("form")
const dvPartes = document.querySelector("#divPartes")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Remove apenas as divs com id que começam com "h3Son"
    const divsAntigas = dvPartes.querySelectorAll('[id^="h3Son')
    divsAntigas.forEach(div => div.remove())

    const nome = frm.inNome.value

    const palavras = nome.split(" ")
    const cores = ['text-primary', 'text-secondary', 'text-success', 'text-danger', 'text-warning']

    palavras.forEach((palavra, i) => {
        const h3 = document.createElement("h3")
        const texto = document.createTextNode(palavra)
        const div = document.createElement("div")
        h3.appendChild(texto)
        h3.className = cores[i]
        div.id = `h3Son-${i}`
        div.appendChild(h3)
        dvPartes.appendChild(div)
    })
})