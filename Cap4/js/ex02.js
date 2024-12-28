const frm = document.querySelector('form')
const rsp = document.querySelector('h3')

// ouvinte de evento acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const masculinoChecked = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso
    if(masculinoChecked) {
        peso =  (Math.pow(altura, 2)) * 22
    } else {
        peso =  (Math.pow(altura, 2)) * 21
    }

    // ou
    // const peso = masculino ? (Math.pow(altura, 2)) * 22 : (Math.pow(altura, 2)) * 21

    console.log(peso)

    rsp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}kg`
})