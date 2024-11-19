import React from "react";
import { CircularProgress, Box } from "@mui/material";

const Spinner = () => (
  <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
    <CircularProgress />
  </Box>
);

export default Spinner;
