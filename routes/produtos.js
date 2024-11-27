const express = require('express');
const router = express.Router();

// Simulando um banco de dados com um array
let produtos = [
    { id: 1, nome: 'Placa-mãe', preco: 350 },
    { id: 2, nome: 'Memória RAM', preco: 200 },
    { id: 3, nome: 'Processador', preco: 1200 },
];

// Rota para listar todos os produtos
router.get('/', (req, res) => {
    res.json(produtos);
});

// Rota para adicionar um novo produto
router.post('/', (req, res) => {
    const { nome, preco } = req.body;
    const id = produtos.length + 1;
    const novoProduto = { id, nome, preco };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

// Rota para atualizar um produto
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nome, preco } = req.body;
    let produto = produtos.find(p => p.id == id);

    if (!produto) {
        return res.status(404).json({ message: 'Produto não encontrado' });
    }

    produto.nome = nome;
    produto.preco = preco;
    res.json(produto);
});

// Rota para excluir um produto
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    produtos = produtos.filter(p => p.id != id);
    res.status(204).send();
});

module.exports = router;
