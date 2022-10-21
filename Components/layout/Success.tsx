import React from "react";
import { Paper, Box, Typography } from "@mui/material";

type Props = {};

function Success({}: Props) {
  return (
    <Box mt={3}>
      <Typography variant="h4">Welcome to the store!</Typography>
    </Box>
  );
}

export default Success;
