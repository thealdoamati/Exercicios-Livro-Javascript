const frm = document.querySelector("form")
const inServicoGroup = document.getElementById("inServicoGroup")
const rspPendentes = document.querySelector("h2")
const rspExecucao = document.querySelector("pre")

let servicosArray = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const novoServico = frm.inServico.value
    adicionarServico(novoServico)


    rspPendentes.innerText = `Serviços Pendentes: ` + servicosArray.length
})

const adicionarServico = (novoServico) => {
    servicosArray.push(novoServico)
    console.log(servicosArray)


    if (localStorage.getItem("Serviço")) {
        const servicos = localStorage.getItem("Serviço") + ";" + novoServico

        localStorage.setItem("Serviços", servicos)
    } else {
        localStorage.setItem("Serviços", servicosArray)
    }

    alert(`Serviço ${novoServico} adicionado!`)
    inServicoGroup.className = "exibe"
}

frm.btExecutar.addEventListener("click", () => {
    const executado = servicosArray.shift()

    console.log(executado)
})

const exibirServico = () => {
    if (!localStorage.getItem("Serviços")) {
        inServicoGroup.className = "oculta"
        return
    }
    inServicoGroup.className = "exibe"

    const servicos = localStorage.getItem("Serviços")
    servicosArray = servicos.split(";")

    console.log(servicosArray)

    rspPendentes.innerText = `Serviços Pendentes: ` + servicosArray.length

    if (localStorage.getItem("Serviço em Execução")) {
        rspExecucao.innerText = localStorage.getItem("Serviço em Execução")
    }

}

window.addEventListener("load", exibirServico)



