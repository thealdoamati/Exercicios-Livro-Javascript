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
