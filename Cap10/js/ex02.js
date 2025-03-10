const frm = document.querySelector("form")
const dvMoedas = document.querySelector('#divMoedas')

window.addEventListener("load", () => {
    //Gerando numeros aleatórios, entre 1 e 5 para cada moeda
    //Math ceil arredonda um valor
    const num1_00 = Math.ceil(Math.random() * 5)
    const num0_50 = Math.ceil(Math.random() * 5)
    const num0_25 = Math.ceil(Math.random() * 5)
    const num0_10 = Math.ceil(Math.random() * 5)

    //Geralndo texto alterativo das img
    const alt1_00 = "Moedas de um real"
    const alt0_50 = "Moedas de Cinquenta Centavos"
    const alt0_25 = "Moedas de Vinte e Cinco Centavos"
    const alt0_10 = "Moedas de Dez Centavos"

    criarMoedas(num1_00, "1_00.jpeg", alt1_00, "moeda1-00")
    criarMoedas(num0_50, "0_50.png", alt0_50, "moeda0-50")
    criarMoedas(num0_25, "0_25.jpeg", alt0_25, "moeda0-25")
    criarMoedas(num0_10, "0_10.jpeg", alt0_10, "moeda0-10")
})

const criarMoedas = (num, moeda, textoAlt, classe) => {
    for (let i = 0; i < num; i++){
        const novaMoeda = document.createElement("img")
        novaMoeda.src = "img/" + moeda
        novaMoeda.alt = textoAlt
        novaMoeda.className = classe

        dvMoedas.appendChild(novaMoeda)
    }
}

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const moedas = document.querySelectorAll("img")
    const valor = frm.inSoma.value

    console.log(moedas)

    let moedasSoma = 0
    moedas.forEach((moeda) => {
        if(moeda.className == "moeda1-00"){
            moedasSoma += 1
        } else if(moeda.className == "moeda0-50") {
            moedasSoma += 0.50
        } else if(moeda.className == "moeda0-25") {
            moedasSoma += 0.25
        } else if(moeda.className == "moeda0-10") {
            moedasSoma += 0.10
        }
    })

    
    const h3 = document.createElement("h3")
    const div = document.createElement("div")

    let resultado
    
    if(valor === moedasSoma.toFixed(2)){
        resultado = "Parabéns, você acertou"
        div.className= "alert alert-success"
    } else {
        resultado = `Ops! Resposta correta é: ${moedasSoma.toFixed(2)}`
        div.className= "alert alert-danger"
    }

    const texto = document.createTextNode(resultado)

    h3.appendChild(texto)
    div.appendChild(h3)
    dvMoedas.appendChild(div)


    frm.submit.disabled = true
})

frm.addEventListener("reset", () => {
    window.location.reload()
})