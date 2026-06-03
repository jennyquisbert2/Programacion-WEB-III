app.delete('/categorias/:id', async (req, res) => {
    const { id } = req.params;
    try {
        // Primero eliminamos los productos asociados (por seguridad si no hay CASCADE)
        await pool.query('DELETE FROM productos WHERE categoria_id = ?', [id]);

        // Luego eliminamos la categoría
        const [result] = await pool.query('DELETE FROM categorias WHERE id = ?', [id]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.json({ message: 'Categoría y sus productos eliminados correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});