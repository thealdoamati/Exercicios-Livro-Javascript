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


frm.addEventListener("click", () => {
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