const frm = document.querySelector('form')
const rsp = document.querySelector('#outNotasde100')
const rsp2 = document.querySelector('#outNotasde50')
const rsp3 = document.querySelector('#outNotasde10')

// ouvinte de evento acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(frm.inValor.value)

    if(valor % 10 != 0) {
        alert(`Valor indisponível, temos apenas notas de R$100, R$50 e R$10`)
        return
    }

    let resto

    const notasDeCem = Math.floor(valor / 100)
    resto = valor - (100 * notasDeCem)
    const notasDeCinquenta = Math.floor(resto / 50)
    resto = resto - (50* notasDeCinquenta)
    const notasDeDez = resto / 10
    

    if(notasDeCem > 0) {
        rsp.innerText = `Notas de R$100: ${notasDeCem}`
    } 

    if (notasDeCinquenta > 0) {
        rsp2.innerText = `Notas de R$50: ${notasDeCinquenta}`
    }

    if (notasDeDez > 0) {
        rsp3.innerText = `Notas de R$10: ${notasDeDez}`
    }  
   
})