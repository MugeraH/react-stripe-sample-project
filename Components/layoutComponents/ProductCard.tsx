import React from "react";
import { IconButton, Box, Badge, Container, Typography } from "@mui/material";

type Props = { product: any };

function ProductCard({ product }: Props) {
  return <Box>{product.title}</Box>;
}

export default ProductCard;
