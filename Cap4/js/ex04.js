const frm = document.querySelector('form')
const rsp = document.querySelector('#outNotasde100')
const rsp2 = document.querySelector('#outNotasde50')
const rsp3 = document.querySelector('#outNotasde10')

// ouvinte de evento acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(frm.inValor.value)
    const dividindoPorCem = valor % 100
    const dividindoRestoPorCinquenta = dividindoPorCem % 50

    let notasDeCem
    let notasDeCinquenta
    let notasDeDez
    let restoDaDivisaoPorCem
    let restoDaDivisaoPorCinquenta

    if(dividindoPorCem === 0) {
        notasDeCem = valor / 100
    } else if (dividindoRestoPorCinquenta === 0) {
        notasDeCem = Math.floor(valor / 100)
        restoDaDivisaoPorCem = valor - (100 * notasDeCem)
        notasDeCinquenta = restoDaDivisaoPorCem / 50
    } else {
        notasDeCem = Math.floor(valor / 100)
        restoDaDivisaoPorCem = valor - (100 * notasDeCem)
        notasDeCinquenta =  Math.floor(restoDaDivisaoPorCem / 50)
        restoDaDivisaoPorCinquenta = restoDaDivisaoPorCem - (50* notasDeCinquenta)
        notasDeDez = restoDaDivisaoPorCinquenta / 10
    }

    rsp.innerText = `Notas de R$100: ${notasDeCem}`
    rsp2.innerText = `Notas de R$50: ${notasDeCinquenta}`
    rsp3.innerText = `Notas de R$10: ${notasDeDez}`
})