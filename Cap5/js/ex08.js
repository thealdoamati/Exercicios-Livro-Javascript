const prompt = require("prompt-sync")();
console.log("Veja se o número é perfeito");
console.log("------------------------------------------------");
const num = Number(prompt("Número:"));

let soma = 0
let divisores = ''

// Usamos num / 2 pois o calculo do numero perfeito só pode ser até a metade do próprio número
for (let i = 1; i <= (num / 2) ; i++) {
  const sinal = i === (num / 2) ? ' = ' : ' + '
  // Aqui validamos se o numero é divisível pelo i
  if(num % i === 0) {
    soma += i
    divisores += i + sinal
  }
}

console.log(divisores + soma)
console.log(`O número ${num}${num === soma ? ' é' : ' não é'} perfeito!`)