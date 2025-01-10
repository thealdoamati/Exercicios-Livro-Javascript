const prompt = require("prompt-sync")();

const altura = Number(prompt("Insira a altura da arvore (até 30) :"));

if (altura < 30) {
  let arvore = "";

  console.log(' ')

  for (let i = 0; i <= altura; i++) {
    const espacos = 30 + (altura - i)
    arvore += " ".repeat(espacos) + "*".repeat(i*2) + "\n";
  }

  console.log(arvore);
} else {
  console.log("Digite um número de 0 a 30");
}
