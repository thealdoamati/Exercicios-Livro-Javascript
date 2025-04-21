const express = require("express") // pacotes
const router = express.Router()

const dbKnex = require("./data/db_config") // dados de conexão com o banco de dados

// Método get é usado para consulta
router.get("/", async (req, res) => {
    try {
        // para obter os livros pode-se utilizar .select().orderBy() ou apenas .orderBy()
        const livros = await dbKnex("livros").orderBy("id", "desc")
        res.status(200).json(livros) // retorna statusCode ok e os dados
    } catch (error) {
        res.status(400).json({ msg: error.message }) // retorna status de erro e msg 
    }
})
module.exports = router

// Método post é usado para inclusão
router.post("/", async (req, res) => {
    // faz a desestruturação dos dados recebidos no corpo da requisição
    const { titulo, autor, ano, preco, foto } = req.body

    // se algum dos campos não foi passado, irá enviar uma mensagem de erro e retornar
    if (!titulo || !autor || !ano || !preco || !foto) {
        res.status(400).json({ msg: "Enviar titulo, autor, ano, preco e foto do livro" })
        return
    }

    // caso ocorra algum erro na inclusão, o programa irá capturar (catch) o erro
    try {
        // insert na tabela livros (retorno id do registro)
        const novo = await dbKnex("livros").insert({ titulo, autor, ano, preco, foto })
        res.status(201).json({ id: novo[0] }) // statusCode indica Create
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})