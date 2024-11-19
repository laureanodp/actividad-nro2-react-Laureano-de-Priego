import React, { useState } from "react";
import { TextField, Button, Paper, Box } from "@mui/material";

const ProductForm = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({ nombre: "", precio: "", categoria: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      nombre: formData.nombre,
      precio: parseFloat(formData.precio),
      categoria: formData.categoria,
    };
    onAddProduct(newProduct);
    setFormData({ nombre: "", precio: "", categoria: "" });
  };

  return (
    <Paper elevation={3} sx={{ padding: 3 }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Precio"
            name="precio"
            value={formData.precio}
            onChange={handleInputChange}
            type="number"
            required
          />
          <TextField
            label="Categoría"
            name="categoria"
            value={formData.categoria}
            onChange={handleInputChange}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Agregar Producto
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default ProductForm;
