const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("<h2>Olá... Bem-vindo!</h2>");
});

app.get("/cap12", (req, res) => {
  res.send("<h2>Capítulo 12: Introdução ao Express</h2>");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.use(express.json());

app.post("/filmes", (req, res) => {
  // const titulo = req.body.titulo
  // const genero = req.body.genero
  const {titulo, genero} = req.body;
  res.send(`Filme: ${titulo} - Gênero: ${genero}, recebido...`)
});
