const frm = document.querySelector("form");
const tbFilmes = document.querySelector("table");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const titulo = frm.inTitulo.value;
  const genero = frm.inGenero.value;

  inserirLinha(titulo, genero);
  gravarLinha(titulo, genero); // Salvando em localStorage

  frm.reset();
  frm.inTitulo.focus();
});

const inserirLinha = (titulo, genero) => {
  const linha = tbFilmes.insertRow(-1);

  const col1 = linha.insertCell(0);
  const col2 = linha.insertCell(1);
  const col3 = linha.insertCell(2);

  col1.innerText = titulo;
  col2.innerText = genero;
  col3.innerHTML = "<i class='exclui' title='Excluir'>&#1008</i>";
};

const gravarLinha = (titulo, genero) => {
  if (localStorage.getItem("filmesTitulo")) {
    const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo;
    const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero;

    localStorage.setItem("filmesTitulo", filmesTitulo);
    localStorage.setItem("filmesGenero", filmesGenero);
  } else {
    localStorage.setItem("filmesTitulo", titulo);
    localStorage.setItem("filmesGenero", genero);
  }
};

tbFilmes.addEventListener("click", (e) => {
  // se a classe no elemento alvo contém 'exclui'
  if (e.target.classList.contains("exclui")) {
    // acessa o pai do pai do elemento alvo, o obtem o texto do primeiro filho
    const titulo = e.target.parentElement.parentElement.children[0].innerText;

    if (confirm(`Confirmar exclusão de ${titulo}?`)) {
      e.target.parentElement.parentElement.remove();

      localStorage.removeItem("filmesTitulo");
      localStorage.removeItem("filmesGenero");

      // salvar novamente, se exister
      for (let i = 1; i < tbFilmes.rows.length; i++) {
        const auxTitulo = tbFilmes.rows[i].cells[0].innerText;
        const auxGenero = tbFilmes.rows[i].cells[1].innerText;
        gravarLinha(auxTitulo, auxGenero)
      }
    }
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("filmesTitulo")) {
    const filmesTitulo = localStorage.getItem("filmesTitulo").split(";");
    const filmesGenero = localStorage.getItem("filmesGenero").split(";");

    for (let i = 0; i < filmesTitulo.length; i++) {
      inserirLinha(filmesTitulo[i], filmesGenero[i]);
    }
  }
});
