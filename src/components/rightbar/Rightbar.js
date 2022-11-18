import { Box, Paper, List, ListItem } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <section>
      <Box
        flex={2}
        pt={1}
        sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
      >
        <Paper sx={{ height: "100vh" }} elevation={0}>
          <List>
            <ListItem>Recommended Posts</ListItem>
          </List>
        </Paper>
      </Box>
    </section>
  );
};

export default Rightbar;
