const frm = document.querySelector("form");
const dvQuatro = document.querySelector("#divQuatro");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const tarefa = frm.inTarefa.value;

  const h5 = document.createElement("h5") // Cria h5
  const texto = document.createTextNode(tarefa) // Cria texto
  h5.appendChild(texto) // Define texto filho do h5
  dvQuatro.appendChild(h5) // e que h5 será filho de divQuatro

  frm.inTarefa.value = ""
  frm.inTarefa.focus()
});

frm.btSelecionar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5")

  if(tarefas.length === 0) {
    alert("Não há tarefas para selecionar")
    return
  }

  let aux = -1

  for (let i = 0; i < tarefas.length; i++) {
    if(tarefas[i].className == "tarefa-selecionada") {
      tarefas[i].className = "tarefa-normal"
      aux = i
      break
    }
  }

  // Se a linha que está selecionada é a ultima, irá voltar para a primeira
  if(aux == tarefas.length - 1) {
    aux = -1
  }

  tarefas[aux + 1].className = "tarefa-selecionada"
})

frm.btRetirar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5")

  aux = -1

  tarefas.forEach((tarefa, i) => {
    if(tarefa.className == "tarefa-selecionada"){
      aux = i
    }
  })

  if(aux == -1){
    alert("Não há tarefas selecionadas")
    return
  }

  if(confirm(`Confirmar exclusão da tarefa ${tarefas[aux].innerText}?`)){
    dvQuatro.removeChild(tarefas[aux])
  }
})

frm.btGravar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5")

  if(tarefas.length === 0) {
    alert("Não há tarefas para serem salvas")
    return
  }

  let dados = ""

  tarefas.forEach(tarefa => {
    dados += tarefa.innerText + ";"
  })

  // Salva removendo o último ";"
  localStorage.setItem("tarefasDia", dados.slice(0, -1))

  //confere se foi salvo
  if(localStorage.getItem("tarefasDia")){
    alert("Ok! Tarefas Salvas")
  }
})

const verificarTarefas = () => {
  if(localStorage.getItem("tarefasDia")) {
    const dados = localStorage.getItem("tarefasDia").split(";")

    dados.forEach(dado => {
      const h5 = document.createElement("h5")
      const texto = document.createTextNode(dado)
      h5.appendChild(texto)
      dvQuatro.appendChild(h5)
    })
  }
}



window.addEventListener("load", verificarTarefas)