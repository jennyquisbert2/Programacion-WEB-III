app.post('/categorias', async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',
            [nombre, descripcion]
        );
        res.status(201).json({ id: result.insertId, nombre, descripcion });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});