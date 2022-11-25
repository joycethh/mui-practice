import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Paper,
} from "@mui/material";
import { List as ListIcon, FolderSpecial } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <section>
      <Box
        flex={1.5}
        pt={1}
        sx={{
          display: { xs: "none", sm: "none", md: "block", lg: "block" },
        }}
      >
        <Paper elevation={0}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/posts">
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText primary="Newsfeed" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={Link} to="/savedPosts">
                <ListItemIcon>
                  <FolderSpecial />
                </ListItemIcon>
                <ListItemText primary="Saved" />
              </ListItemButton>
            </ListItem>
          </List>
        </Paper>
      </Box>
    </section>
  );
};

export default Sidebar;
