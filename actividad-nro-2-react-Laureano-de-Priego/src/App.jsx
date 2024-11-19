import { useState, useEffect } from "react";
import { Box, CssBaseline, Grid } from "@mui/material";
import AppBarMenu from "./components/AppBarMenu";
import SidebarMenu from "./components/SidebarMenu";
import ProductTable from "./components/ProductTable";
import ProductForm from "./components/ProductForm";
import Spinner from "./components/Spinner";

const mockData = [
  { id: 1, nombre: "Auriculares Inalámbricos", precio: 120, categoria: "Electrónica" },
  { id: 2, nombre: "Silla de Escritorio", precio: 300, categoria: "Muebles" },
  { id: 3, nombre: "Cafetera Espresso", precio: 250, categoria: "Electrodomésticos" },
  { id: 4, nombre: "Juego de Mesa - Monopoly", precio: 50, categoria: "Juguetes" },
  { id: 5, nombre: "Libro de Programación en JavaScript", precio: 35, categoria: "Libros" },
];

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarMenu toggleDrawer={toggleDrawer} />
      <SidebarMenu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#f5f5f5" }}>
        <Box sx={{ mt: 8 }}>
          {loading ? (
            <Spinner />
          ) : (
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <ProductTable products={products} />
              </Grid>
              <Grid item xs={12} md={4}>
                <ProductForm onAddProduct={handleAddProduct} />
              </Grid>
            </Grid>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
