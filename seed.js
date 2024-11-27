const db = require('./config/db');

async function seedDatabase() {
    try {
        // Inserir Clientes
        await db.query(`
            INSERT INTO clientes (nome, email, telefone, endereco) VALUES
            ('João Silva', 'joao@gmail.com', '1111111111', 'Rua A, 123'),
            ('Maria Souza', 'maria@gmail.com', '2222222222', 'Rua B, 456'),
            ('Carlos Lima', 'carlos@gmail.com', '3333333333', 'Rua C, 789'),
            ('Ana Clara', 'ana@gmail.com', '4444444444', 'Rua D, 101'),
            ('Pedro Costa', 'pedro@gmail.com', '5555555555', 'Rua E, 202');
        `);

        // Inserir Vendedores
        await db.query(`
            INSERT INTO vendedores (nome, email) VALUES
            ('Vendedor 1', 'vendedor1@gmail.com'),
            ('Vendedor 2', 'vendedor2@gmail.com');
        `);

        // Inserir Produtos
        await db.query(`
            INSERT INTO produtos (nome, preco, estoque) VALUES
            ('Teclado', 100.00, 50),
            ('Mouse', 50.00, 100),
            ('Monitor', 700.00, 20),
            ('Placa de Vídeo', 1500.00, 15),
            ('Processador', 1200.00, 10),
            ('Memória RAM 8GB', 300.00, 25),
            ('SSD 512GB', 400.00, 30),
            ('Fonte 500W', 200.00, 20),
            ('Gabinete', 250.00, 10),
            ('Cooler', 80.00, 40);
        `);

        console.log('Dados inseridos com sucesso!');
        process.exit(0); // Finaliza o script
    } catch (err) {
        console.error('Erro ao inserir dados:', err.message);
        process.exit(1); // Finaliza com erro
    }
}

seedDatabase();
