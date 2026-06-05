const pool = require('../config/db'); //conecta com bd

const listarLivros = async (req, res) =>{
    try{
        //faz select do que precisa
        const resultado = await pool.query('SELECT * FROM livros'); //await = vamos esperar ate o bd responder pra continuar
        //converte pra json:
        res.json(resultado.rows);

    }catch (erro){
        console.erro(erro);
        res.status(500).json({erro: "Erro ao buscar livros"});
    }
};

const addLivro = async (req, res) =>{
    try{
        //get dados
        const {titulo, autor} = req.body;
        //faz select do que precisa
        const resultado = await pool.query('INSERT INTO livros (titulo, autor) VALUES ($1, $2) RETURNING *', [titulo, autor]);
        res.status(201).json(resultado.rows[0]);
    }catch (erro){
        console.erro(erro);
        res.status(500).json({erro: "Erro ao add livro"});
    }
};

module.exports = {
    listarLivros,
    addLivro
};