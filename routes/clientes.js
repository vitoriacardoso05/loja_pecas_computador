const express = require('express');
const router = express.Router();
const db = require('../config/db');

//Criar Cliente
router.post('/', async (req,res) => {
    const { nome, email, telefone, endereco } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO clientes (nome, email, telefone, endereco) VALUES (?, ?, ?, ?)' ,
            [nome, email, telefone, endereco]
        );
        res.status(201).json({id: result.insertId, nome, email, telefone, endereco});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

//Listar Clientes
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM clientes');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});

//Atualizar Clientes
router.put('/:id', async(req, res) => {
    const { id } = req.params;
    const { nome, email, telefone, endereco} = req.body;
    try {
        await db.query(
            'UPDATE cliente SET nome = ?, email = ?, telefone = ?, endereco = ? WHERE id = ?',
            [nome, email, telefone, endereco, id]
        );
        res.json({ message: 'Cliente atualizado com sucesso!' });
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});

//Deletar Clientes
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM clientes WHERE id = ?', [id]);
        res.json({ message: 'Cliente deletado com sucesso! '});
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});

module.exports = router;
