import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import { productsArray } from "../../utils/productsStore";
import ProductCard from "../layoutComponents/ProductCard";
type Props = {};

function Store({}: Props) {
  return (
    <Box mt={3}>
      <Typography variant="h4" mb={4}>
        Welcome to the store!
      </Typography>

      <Box>
        {productsArray.map((product, index) => (
          <ProductCard product={product} />
        ))}
      </Box>
    </Box>
  );
}

export default Store;
