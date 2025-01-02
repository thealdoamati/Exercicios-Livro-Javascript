// Parcelas
const prompt = require("prompt-sync")();
console.log("Calcular parcelas");
console.log("------------------------------------------------");
const valor = prompt("Valor:");
const parcelas = Number(prompt("N° de etiquetas:"));

let numParcelas = ""
for (let i = parcelas; i >= 1; i--) {
    const divisão = valor/i
    if(Number.isInteger(divisão) || divisão == valor) {
        numParcelas = numParcelas + (i) + "X de R$" + divisão.toFixed(2) + "\n"
    } else {
        const parcelaArredondada = Math.floor(divisão)
        const ultimaParcela = parcelaArredondada + (valor - (parcelaArredondada * i))
        numParcelas = numParcelas + (i - 1) + "X de R$" + parcelaArredondada.toFixed(2) + " e 1x de R$" + ultimaParcela.toFixed(2) +"\n"
    }
    
}
console.log(numParcelas)
