const frm = document.querySelector("form");
const rsp = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const senha = frm.inSenha.value;

  const numbers = senha.match(/[0-9]/g);
  const minusculas = senha.match(/[a-z]/g);
  const maiusculas = senha.match(/[A-Z]/g);
  const simbolos = senha.match(/\W|_/g);

  let error = "";

  if (senha.length < 8 || senha.length > 15) {
    rsp.innerText = error += "A senha precisa ter entre 8 e 15 caracteres\n";
  }
  if (numbers === null) {
    rsp.innerText = error += "A senha precisa ter ao menos 1 número\n";
  }
  if (maiusculas === null || maiusculas.length < 2) {
    rsp.innerText = error +=
      "A senha precisa ter ao menos 2 letras maiúsculas\n";
  }
  if (minusculas === null) {
    rsp.innerText = error += "A senha precisa ter ao menos 1 letra minuscula\n";
  }
  if (simbolos === null) {
    rsp.innerText = error += "A senha precisa ter ao menos 1 símbolo\n";
  }

  if (error === "") {
    rsp.innerText = "Senha cadastrada!";
  }
});
