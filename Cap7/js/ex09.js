const prompt = require("prompt-sync")();

const numParcelas = Number(prompt("Quantas parcelas? "));

let dataBase = new Date();

const datasParcelas = [];

for (let i = 1; i <= numParcelas; i++) {
  const parcela = new Date();

  parcela.setMonth(dataBase.getMonth() + (i - 1));

  const dia = parcela.getDate();
  const mes = parcela.getMonth() + 1;
  const ano = parcela.getFullYear();

  const diaFormatado = dia.toString().padStart(2, "0");
  const mesFormatado = mes.toString().padStart(2, "0");

  datasParcelas.push(`${diaFormatado}/${mesFormatado}/${ano}`);
}


const datas = datasParcelas.reduce((acum, data) => acum + data + "\n", "")

console.log(datas);
