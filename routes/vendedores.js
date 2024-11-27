const express = require('express');
const router = express.Router();

// Simulando um banco de dados com um array
let vendedores = [
    { id: 1, nome: 'João', salario: 2500 },
    { id: 2, nome: 'Maria', salario: 3000 },
];

// Rota para listar todos os vendedores
router.get('/', (req, res) => {
    res.json(vendedores);
});

// Rota para adicionar um novo vendedor
router.post('/', (req, res) => {
    const { nome, salario } = req.body;
    const id = vendedores.length + 1;
    const novoVendedor = { id, nome, salario };
    vendedores.push(novoVendedor);
    res.status(201).json(novoVendedor);
});

// Rota para atualizar um vendedor
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nome, salario } = req.body;
    let vendedor = vendedores.find(v => v.id == id);

    if (!vendedor) {
        return res.status(404).json({ message: 'Vendedor não encontrado' });
    }

    vendedor.nome = nome;
    vendedor.salario = salario;
    res.json(vendedor);
});

// Rota para excluir um vendedor
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    vendedores = vendedores.filter(v => v.id != id);
    res.status(204).send();
});

module.exports = router;
