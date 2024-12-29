const frm = document.querySelector('form')
const rsp = document.querySelector('h3')

// ouvinte de evento acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const number = Number(frm.inNumber.value)

    const raizQuadrada = Math.sqrt(number)
    console.log(raizQuadrada)

    // let mensagem
    // if(Number.isInteger(raizQuadrada)) {
    //     mensagem = raizQuadrada
    // } else {
    //     mensagem = `Não há raiz exata para ${number}`
    // }

    // ou
    const mensagem = Number.isInteger(raizQuadrada) ? raizQuadrada : `Não há raiz exata para ${number}`

    rsp.innerText = mensagem
})