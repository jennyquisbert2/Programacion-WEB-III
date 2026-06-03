app.patch('/categorias/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?',
            [nombre, descripcion, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.json({ message: 'Categoría actualizada con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});