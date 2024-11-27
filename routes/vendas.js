const express = require('express');
const router = express.Router();

// Simulando um banco de dados com um array
let vendas = [
    { id: 1, produtoId: 1, vendedorId: 2, quantidade: 2, total: 700 },
    { id: 2, produtoId: 3, vendedorId: 1, quantidade: 1, total: 1200 },
];

// Rota para listar todas as vendas
router.get('/', (req, res) => {
    res.json(vendas);
});

// Rota para adicionar uma nova venda
router.post('/', (req, res) => {
    const { produtoId, vendedorId, quantidade, total } = req.body;
    const id = vendas.length + 1;
    const novaVenda = { id, produtoId, vendedorId, quantidade, total };
    vendas.push(novaVenda);
    res.status(201).json(novaVenda);
});

// Rota para atualizar uma venda
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { produtoId, vendedorId, quantidade, total } = req.body;
    let venda = vendas.find(v => v.id == id);

    if (!venda) {
        return res.status(404).json({ message: 'Venda não encontrada' });
    }

    venda.produtoId = produtoId;
    venda.vendedorId = vendedorId;
    venda.quantidade = quantidade;
    venda.total = total;
    res.json(venda);
});

// Rota para excluir uma venda
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    vendas = vendas.filter(v => v.id != id);
    res.status(204).send();
});

module.exports = router;
