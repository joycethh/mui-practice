import { Box } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      backgroundColor="blue"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
};

export default Rightbar;
