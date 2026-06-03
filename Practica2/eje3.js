app.get('/categorias/:id', async (req, res) => {
    const { id } = req.params;
    try {
        // 1. Buscar la categoría
        const [categoria] = await pool.query('SELECT * FROM categorias WHERE id = ?', [id]);
        if (categoria.length === 0) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        // 2. Buscar los productos de esa categoría
        const [productos] = await pool.query('SELECT * FROM productos WHERE categoria_id = ?', [id]);

        // 3. Unir los resultados
        res.json({
            ...categoria[0],
            productos: productos
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});