//importacao do express:
const express = require('express');
const cors = require('cors');
require ('./config/db');

const livroRoutes = require('./routes/livroRoutes');

//criando o aplicativo
const app = express();

//nosso aplicativo vai entender JSON
app.use(express.json());
app.use(cors()); //vamos usar pro react mais na frente

app.use('/livros', livroRoutes);
//app.get('/teste', (req, res)=>{
//    res.json({mensagem: "Opa cumpade!"});
//});
app.listen(3000, ()=>{
    console.log("Tudo show");
});