const frm = document.querySelector("form")
const dvJogos = document.querySelector("#divJogos")
const tbClubes = document.querySelector("table")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const clube = frm.inClube.value

    const div = document.createElement("div")
    const h5 = document.createElement("h5")
    h5.className = 'text-end fst-italic'

    const texto = document.createTextNode(clube)
    h5.appendChild(texto)
    div.appendChild(h5)
    dvJogos.appendChild(div)
})

frm.btMontar.addEventListener("click", () => {
    const clubes = document.querySelectorAll("h5")

    if (clubes.length === 0) {
        alert("Adicione clubes")
        return
    } else if (clubes.length % 2 !== 0) {
        alert("Você precisa ter um número par de times para criar a Copa")
        return
    }

    // avança de 2 em 2
    for (let i = 0; i < clubes.length; i+=2) {
        const linha = tbClubes.insertRow(-1)
        const col1 = linha.insertCell(0)
        const col2 = linha.insertCell(1)

        col1.innerText = clubes[i].innerText
        col2.innerText = clubes[i + 1].innerText
    }

    frm.btAdicionar.disabled = true
})

frm.addEventListener("reset", () => {
    window.location.reload()
})