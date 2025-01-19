const frm = document.querySelector("form")
const rsp = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const idade = frm.inIdade.value

    if (nome === "" || idade === "") {
        rsp.innerText = "Você precisa preencher os dois campos"
        frm.inNome.focus()
        frm.inIdade.focus()
    }

    const tracos = " " + retornarTracos(nome)
    const categoria =  "Categoria: " + categorizarAluno(idade)
    const resultado = [nome, tracos, categoria]

    rsp.innerText = resultado.join("\n")
    

    frm.inNome.value = ""
    frm.inIdade.value = ""
})

function retornarTracos(nome) {
    const letrasArray = nome.split("")
    const tracosArray = []

    for (letra of letrasArray) {
        if(letra === " "){
            tracosArray.push(" ")
        } else {
            tracosArray.push("-")
        }
    }

    const tracos = tracosArray.join("")

    return tracos

}

function categorizarAluno(idade) {
    let categoria = ""
    if(idade >= 18) {
        categoria = "Adulto"
    } else if (idade >= 13) {
        categoria = "Juvenil"
    } else {
        categoria = "Infantil"
    }

    return categoria
}