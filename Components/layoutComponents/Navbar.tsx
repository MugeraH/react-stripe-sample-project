import React from "react";
import { IconButton, Box, Badge, Container, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
type Props = { cartCount: number };

function Navbar({ cartCount }: Props) {
  return (
    <Box sx={{ flexGrow: 1, background: "black", padding: "20px 0px" }}>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{ color: "white", fontWeight: "bold", fontSize: "20px" }}
        >
          {" "}
          Ecommerce Store
        </Typography>

        {/* <IconButton>
        {" "}
   
      </IconButton> */}

        <Badge badgeContent={cartCount} color="primary">
          <ShoppingCartIcon sx={{ color: "white" }} />
        </Badge>
      </Container>
    </Box>
  );
}

export default Navbar;
