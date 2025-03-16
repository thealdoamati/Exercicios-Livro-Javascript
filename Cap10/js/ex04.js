const frm = document.querySelector("form")
const dvVelasRespose = document.querySelector("#divVelasRespose")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const idade = frm.inIdade.value

    if(idade > 9) {
        const digitos = idade.toString().split('')
        digitos.forEach(digito => {
            gerarImagens(digito)
        })
    } else {
        gerarImagens(idade)
    }

    frm.submit.disabled = true
})


const gerarImagens = (num) => {
    const novaImagem = document.createElement("img")
    novaImagem.src = "img/numbers/number-" + num + ".png"
    novaImagem.alt = "Vela número " + num
    novaImagem.class = "vela" + num

    dvVelasRespose.appendChild(novaImagem)
}

frm.addEventListener("reset", () => {
    window.location.reload()
})