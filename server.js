const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

//Rotas Principais
app.use('/clientes', require('./routes/clientes'));
app.use('/vendedores', require('./routes/vendedores'));
app.use('/produtos', require('./routes/produtos'));
app.use('/vendas', require('./routes/vendas'));

//Inicia o Servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});