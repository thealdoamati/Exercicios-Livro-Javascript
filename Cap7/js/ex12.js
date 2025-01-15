const frm = document.querySelector("form");
const rspData = document.querySelector("h3");
const rspDesconto = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const date = frm.inDate.value;
  const value = Number(frm.inValue.value);

  const today = new Date();
  const dueDate = new Date();

  const parts = date.split("-"); // aaaa-mm-dd
  dueDate.setDate(Number(parts[2]));
  dueDate.setMonth(Number(parts[1]) - 1 + 3);
  dueDate.setFullYear(Number(parts[0]));

  const day = dueDate.getDate();
  const month = dueDate.getMonth() + 1;
  const dayZero = day < 10 ? "0" + day : day;
  const monthZero = month < 10 ? "0" + month : month;
  const year = dueDate.getFullYear();

  const discount = value - (value * 0.2)

  console.log(dueDate);
  console.log(today);

  if (dueDate < today) {
    rspData.innerText =
      "A data limite de 90 dias já passou, você terá que pagar o valor total da multa.";
    rspDesconto.innerText = ``;
  } else {
    rspData.innerText = `Data Limite para Pagto com Desconto: ${dayZero}/${monthZero}/${year}`;
    rspDesconto.innerText = `Valor com Desconto R$:${discount.toFixed(2)}`;
  }
});
