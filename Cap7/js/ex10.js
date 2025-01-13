const frm = document.querySelector("form");
const rsp = document.querySelector("h3");

let pares = "";
let impares = "";

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const mensagem = frm.inMensagem.value;

  for (let i = 0; i < mensagem.length; i++) {
    if (i % 2 === 0) {
      impares += mensagem[i];
    } else {
      pares += mensagem[i];
    }
  }

  rsp.innerText = pares + impares;
});

frm.btnDecriptografar.addEventListener("click", () => {
  const mensagem = frm.inMensagem.value;

  if (!mensagem) {
    rsp.innerText = "Você precisa digitar uma mensagem antes";
    return;
  }

  const decriptedSolved = [];

  const letrasPares = pares.split("");
  const letrasImpares = impares.split("");

  letrasPares.forEach((item1, i) => {
    const item2 = letrasImpares[i];
    decriptedSolved.push(item2);
    decriptedSolved.push(item1);
  });

  const decriptedMessage = decriptedSolved.join('')

  rsp.innerText = decriptedMessage
});
