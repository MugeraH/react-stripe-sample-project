import React from "react";
import { Paper, Box, Typography } from "@mui/material";
type Props = {};

function Cancel({}: Props) {
  return (
    <Box mt={3}>
      <Typography variant="h4">
        Sorry to see you cancellled your stripe payment
      </Typography>
    </Box>
  );
}

export default Cancel;
