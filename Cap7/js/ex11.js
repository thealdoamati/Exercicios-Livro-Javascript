const frm = document.querySelector("form");
const rsp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const palavra = frm.inPalavra.value;

  const letrasReverse = palavra.split("").reverse().join('');

  if (palavra === letrasReverse) {
    rsp.innerText = `A palavra ${palavra} é um palíndromo`;
  } else {
    rsp.innerText = `A palavra ${palavra} não é um palíndromo`;
  }

  frm.inPalavra.value = ""
  frm.inPalavra.focus()
});
