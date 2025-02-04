const rsp = document.querySelector("h1")

const contarVisita = () => {
    let contagem = 1
    if (!localStorage.getItem("Visitas")) {
        rsp.innerText = `Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.`
    } else {
        contagem = Number(localStorage.getItem("Visitas"))
        rsp.innerText = `Que bom que você voltou! Está é a sua visita de número ${contagem} ao nosso site.`
    }
    contagem += 1
    localStorage.setItem("Visitas", contagem)
}

window.addEventListener("load", contarVisita)