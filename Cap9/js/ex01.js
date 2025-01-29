const inRadios = document.querySelectorAll("input")

const trocarClube = () => {
    const clubes = ["Brasil", "Pelotas", "Farroupilha"]

    let selecao
    // percore os inRadios para verificar qual está selecionado
    for (let i = 0; i < inRadios.length; i++) {
        if (inRadios[i].checked) {
            selecao = i
            break
        }
    }

    if (selecao <= 2) {
        dvTitulo.className = `row cores-${clubes[selecao]}` //modifica a cor
        // muda a prpriedade src com a imagem do clube selecionado
        imClube.src = `img/${clubes[selecao].toLowerCase()}.png`
        imClube.className = "img-fluid" //muda estilo para exibir imagem
        imClube.alt = `Símbolo do ${clubes[selecao]}`
        localStorage.setItem("clube", clubes[selecao])
    } else {
        dvTitulo.className = "row"
        imClube.className = "d-none"
        imClube.alt = ""
        localStorage.removeItem("clube")
    }
}