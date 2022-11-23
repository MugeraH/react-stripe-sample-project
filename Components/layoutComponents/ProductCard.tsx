import React from "react";
import {
  IconButton,
  Box,
  Badge,
  Container,
  Typography,
  Paper,
  Button,
} from "@mui/material";

type Props = { product: any };

function ProductCard({ product }: Props) {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        width: "300px",
        background: "",
        borderRadius: "5px",
      }}
    >
      <Typography variant="h5">{product.title}</Typography>
      <Typography variant="h6" my={1}>
        {product.price}
      </Typography>

      <Button variant="contained" color="primary">
        Add to Cart
      </Button>
    </Paper>
  );
}

export default ProductCard;
