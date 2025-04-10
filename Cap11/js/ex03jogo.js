const frm = document.querySelector("form");
const respPalavra = document.querySelector("#outPalavra");
const respErros = document.querySelector("#outErros");
const respDica = document.querySelector("#outDica");
const respChances = document.querySelector("#outChances");
const rspMensagemFinal = document.querySelector("#outMensagemFinal");
const imgStatus = document.querySelector("img");

let palavraSorteada;
let dicaSorteada;

window.addEventListener("load", () => {
  if (!localStorage.getItem("jogoPalavra")) {
    alert("Cadastre palavras para jogar");
    frm.inLetra.disabled = true;
    frm.btJogar.disabled = true;
    frm.btVerDica.disabled = true;
  }

  const palavras = localStorage.getItem("jogoPalavra").split(";");
  const dicas = localStorage.getItem("jogoDica").split(";");

  const tam = palavras.length;

  const numAleatorio = Math.floor(Math.random() * tam);

  palavraSorteada = palavras[numAleatorio].toUpperCase();
  dicaSorteada = dicas[numAleatorio];
  let novaPalavra = "";

  for (const letra of palavraSorteada) {
    // se
    if (letra === palavraSorteada.charAt(0)) {
      novaPalavra += palavraSorteada.charAt(0);
    } else {
      novaPalavra += "_";
    }
  }

  respPalavra.innerText = novaPalavra;
});

frm.btVerDica.addEventListener("click", () => {
  if (respErros.innerText.includes("*")) {
    alert("Você já solicitou uma dica...");
    frm.inLetra.focus();
    return;
  }

  respDica.innerText = "*" + dicaSorteada;
  respErros.innerText = "*";

  const chances = Number(respChances.innerText) - 1;
  respChances.innerText = chances;

  trocarStatus(chances); //trocar imagem

  verificarFim(); // verificar se atingiu limite de chances

  frm.inLetra.focus();
});

const trocarStatus = (num) => {
  if (num > 0) imgStatus.src = `img/status${num}.jpg`;
};

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const letra = frm.inLetra.value.toUpperCase();

  let erros = respErros.innerText;
  let palavra = respPalavra.innerText;

  if (erros.includes(letra)) {
    alert("Você já apostou esta letra");
    frm.inLetra.focus();
  }

  console.log(palavraSorteada)
  console.log(palavraSorteada.includes(letra))

  if (palavraSorteada.includes(letra)) {
    let novaPalavra = "";
    for (let i = 0; i < palavraSorteada.length; i++) {
      if (palavraSorteada.charAt(i) === letra) {
        novaPalavra += letra;
      } else {
        novaPalavra += palavra.charAt(i);
      }
    }
    respPalavra.innerText = novaPalavra;
    console.log('novaPalavra', novaPalavra)
  } else {
    respErros.innerText += letra; // Acrescente letra aos erros
    const chances = Number(respChances.innerText) - 1;
    respChances.innerText = chances;

    trocarStatus(chances)
  }

  verificarFim()

  frm.inLetra.value = ""
  frm.inLetra.focus()
});
