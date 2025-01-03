const frm = document.querySelector("form")
const rspErros = document.querySelector("h3")
const rspChances = document.querySelector("h4")

const erros = []
const aleatoryNumber = Math.floor(Math.random() * 100) + 1
const chances = 6
console.log(aleatoryNumber)

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const number = Number(frm.inNumber.value)

    if (number === aleatoryNumber) {
        alert("Parabéns, você acertou o número!")
    } else {

        if (erros.includes(number)) {
            alert("Você já apostou esse número")
            frm.inNumber.value = ""
            frm.inNumber.focus()

        } else {
            erros.push(number)

            const numErros = erros.length
            const numChances = chances - numErros

            rspErros.innerText = `Erros: ${numErros}`
            rspChances.innerText = `Chances: ${numChances}`

            frm.inNumber.value = ""
            frm.inNumber.focus()

            if (numChances === 0) {
                alert("Acabaram suas chances!")
                return
            }
        }

    }


})