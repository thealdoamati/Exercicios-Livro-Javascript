const frm = document.querySelector("form")
const rsp = document.querySelector("h4")
const rspVerify = document.querySelector("h5")

const numeros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const number = Number(frm.inNumber.value)

    if (numeros.includes(number)) {
        rspVerify.innerText = `Atenção! O número ${number} já foi usado`

        frm.inNumber.value = ""
        frm.inNumber.focus()
    } else {

        numeros.push(number)

        frm.inNumber.value = ""
        frm.inNumber.focus()

        rsp.innerText = `Números: ${numeros.join(", ")}`
    }
})

frm.btnOrdem.addEventListener("click", () => {
    if (numeros.length === 0) {
        rspVerify.innerText = `Você precisa incluir números para poder conferi-los!`
    } else {
        const numerosCrescente = [...numeros].sort((a, b) => a - b)
        // Verifica se todos os números estão em ordem, se sim, true
        const estaEmOrdem = numeros.every((numero, i) => numero === numerosCrescente[i])

        if (estaEmOrdem) {
            rspVerify.innerText = `Os números estão em ordem crescente!`
        } else {
            rspVerify.innerText = `Atenção! Os números não estão em ordem crescente!`
        }

    }
})