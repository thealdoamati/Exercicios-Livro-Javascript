const frm = document.querySelector("form")
const rsp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    let resposta = "" // Variável tipo string para concatenar resposta

    for (let i = 1; i <= 10; i++) {
        // = resposta para ir adicionando na string cada uma das resoluções concatenadas
        resposta = resposta + numero + "x" + i + "=" + (numero * i) + '\n'
    }

    rsp.innerText = resposta
})