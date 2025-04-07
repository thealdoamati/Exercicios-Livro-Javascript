const tbPalavras = document.querySelector("table")
const ckMostrar = document.querySelector("input[type='checkbox']")

const montarTabela = () => {
    if(localStorage.getItem("jogoPalavra")) {
        const palavras = localStorage.getItem("jogoPalavra").split(";")
        const dicas = localStorage.getItem("jogoDica").split(";")

        for (let i = 0; i < palavras.length; i++) {
            const linha = tbPalavras.insertRow(-1)

            const col0 = linha.insertCell(0)
            const col1 = linha.insertCell(1)
            const col2 = linha.insertCell(2)

            col0.innerText = palavras[i]
            col1.innerText = dicas[i]
            col2.innerHTML = "<i class='exclui' title='Excluir'>&#1008</i>";
        }
    }
}

ckMostrar.addEventListener("change", () => {
    ckMostrar.checked ? montarTabela() : window.location.reload()
})

ckMostrar.addEventListener9("click", (e) => {
    if(e.target.classList.contains("exclui")){
        const titulo = e.target.parentElement.children[0].innerText
        
        if(confirm(`Confirmar exclusão de ${titulo}?`)){
            e.target.parentElement.remove()

            localStorage.removeItem("jogoPalavra")
            localStorage.removeItem("jogoDica")

            const palavras = []
            const dicas = []

            for (let i = 0; tbPalavras.rows.length; i++){
                palavras.push(tbPalavras.rows[i].cells[0].innerText)
                dicas.push(tbPalavras.rows[i].cells[1].innerText)
            }

            localStorage.setItem("jogoPalavra", palavras.join(";"))
            localStorage.setItem("jogoDica", palavras.join(";"))
        }
    }
})