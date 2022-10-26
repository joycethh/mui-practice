import { Box, Paper, List, ListItem } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      pt={1}
      sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
    >
      <Paper sx={{ height: "100vh" }}>
        <List>
          <ListItem>Recommended Posts</ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Rightbar;
