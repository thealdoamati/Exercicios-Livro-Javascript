const frm = document.querySelector("form");

const TAXA_MULTA = 2 / 100; // multa por atraso
const TAXA_JUROS = 0.33 / 100; // juros por dia de atraso

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const dataVenc = frm.inDataVenc.value;
  console.log(dataVenc);
  const valor = Number(frm.inValor.value);

  const hoje = new Date();
  const vencto = new Date();

  const partes = dataVenc.split("-"); // data vem no formato aaaa-mm-dd
  vencto.setDate(Number(partes[2]));
  vencto.setMonth(Number(partes[1]) - 1);
  vencto.setFullYear(Number(partes[0]));

  const atraso = hoje - vencto;
  let multa = 0;
  let juros = 0;

  if (atraso > 0) {
    const dias = atraso / 86400000; // Calculando diferença entre duas datas em ms
    multa = valor * TAXA_MULTA;
    juros = valor * TAXA_JUROS * dias;
  }

  const total = valor + multa + juros;
  console.log(total)

  frm.outMulta.value = multa.toFixed(2);
  frm.outJuros.value = juros.toFixed(2);
  frm.outTotal.value = total.toFixed(2);
});
