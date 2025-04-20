exports.seed = function (knex) {
  return knex("livros")
    .del()
    .then(function () {
      return knex("livros").insert([
        {
          titulo: "Web design responsivo",
          autor: "Maurício Samy Silva",
          ano: 2014,
          preco: 73.0,
          foto: "https://s3.novatec.com.br/capas/9788575223924.jpg",
        },
        {
          titulo: "22 responsivo",
          autor: "Mau S",
          ano: 2015,
          preco: 73.0,
          foto: "https://s3.novatec.com.br/capas/9788575223924.jpg",
        },
        {
          titulo: "blsbls",
          autor: "Pedro",
          ano: 2014,
          preco: 73.0,
          foto: "https://s3.novatec.com.br/capas/9788575223924.jpg",
        },
      ]);
    });
};
