const inRadios = document.querySelectorAll("input")
const dvTitulo = document.getElementById("divTitulo")
const imClube = document.getElementById("imgClube")

const trocarClube = () => {
    console.log("Chamei aqui")
    const clubes = ["Brasil", "Pelotas", "Farroupilha"]

    let selecao
    // percore os inRadios para verificar qual está selecionado
    for (let i = 0; i < inRadios.length; i++) {
        if (inRadios[i].checked) {
            selecao = i
            console.log("Clube selecionado:", clubes[selecao]) // Debug
            break
        }
    }

    console.log('selecao', selecao)

    console.log('dvTitulo', dvTitulo)

    if (selecao <= 2) {
        dvTitulo.className = `row cores-${clubes[selecao]}` //modifica a cor
        // muda a prpriedade src com a imagem do clube selecionado
        imClube.src = `img/${clubes[selecao].toLowerCase()}.png`
        imClube.className = "img-fluid" //muda estilo para exibir imagem
        imClube.alt = `Símbolo do ${clubes[selecao]}`
        console.log("Tentando salvar no localStorage:", clubes[selecao])
        try {
            localStorage.setItem("clube", clubes[selecao])
            console.log("Valor salvo no localStorage:", localStorage.getItem("clube"))
        } catch (e) {
            console.error("Erro ao salvar no localStorage:", e)
        }
    } else {
        dvTitulo.className = "row"
        imClube.className = "d-none"
        imClube.alt = ""
        localStorage.removeItem("clube")
    }
}

inRadios.forEach(radio => {
    radio.addEventListener("change", trocarClube)
})

const verificarClube = () => {
    if(localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube")
        if(clube === "Brasil") {
            inRadios[0].checked = true            
        } else if (clube === "Pelotas") {
            inRadios[1].checked = true
        } else {
            inRadios[2].checked = true
        }
        trocarClube()
    }
}

window.addEventListener("load", verificarClube)