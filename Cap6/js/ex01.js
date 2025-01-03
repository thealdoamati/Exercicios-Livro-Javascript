const frm = document.querySelector("form")
const rspAtendimento = document.querySelector("h3")
const rspFila = document.querySelector("h4")

const pacientes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    pacientes.push(nome)

    let lista = ""
    for (let i = 0; i < pacientes.length; i++) {
        lista+= `${i + 1}. ${pacientes[i]} \n`
    }

    rspFila.innerText = lista

    frm.inNome.value = ""
    frm.inNome.focus()
})

frm.btUrgencia.addEventListener("click", () => {
    const nome = frm.inNome.value

    if(!frm.checkValidity()) {
        alert("Informe o nome do paciente")
        frm.inNome.focus()
        return
    }

    // Colococa no primeiro lugar da fila
    pacientes.unshift(nome)

    let lista = ""
    // Atualiza a lista toda de acordo com o array atualizado
    pacientes.forEach((paciente, i) => {lista += `${i + 1}. ${paciente}\n`} )

    rspFila.innerText = lista
    
    frm.inNome.value = ""
    frm.inNome.focus()
})

frm.btAtender.addEventListener("click", () => {
    if (pacientes.length === 0) {
        alert("Não há pacientes na lista de espera")
        frm.inNome.focus()
        return
    }

    // Removendo o primeiro item da lista e salvando em atenda
    const atenda = pacientes.shift()

    rspAtendimento.innerText = atenda

    // Atualizando a lista no html
    let lista = ""
    pacientes.forEach((paciente, i) => {lista += `${i + 1}. ${paciente}\n`} )


    rspFila.innerText = lista
    
    frm.inNome.value = ""
    frm.inNome.focus()
})