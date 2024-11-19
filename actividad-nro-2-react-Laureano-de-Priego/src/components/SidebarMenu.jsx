import React from "react";
import { Drawer, List, ListItem, ListItemText, Typography, Divider } from "@mui/material";

const SidebarMenu = ({ isDrawerOpen, toggleDrawer }) => (
  <Drawer
    open={isDrawerOpen}
    onClose={toggleDrawer}
    sx={{
      [`& .MuiDrawer-paper`]: {
        width: 240,
        boxSizing: "border-box",
      },
    }}
  >
    <Typography variant="h6" sx={{ padding: 2 }}>
      Menú
    </Typography>
    <Divider />
    <List>
      {["Inicio", "Productos", "Configuración"].map((text) => (
        <ListItem button key={text} onClick={toggleDrawer}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default SidebarMenu;
