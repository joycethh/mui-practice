import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Switch,
  Paper,
} from "@mui/material";
import {
  List as ListIcon,
  FolderSpecial,
  Brightness4,
  Logout,
} from "@mui/icons-material";

const Sidebar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <Box
      flex={1.5}
      pt={1}
      sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
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

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/logout">
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Brightness4 />
              </ListItemIcon>
              <Switch
                checked={isDarkMode}
                onChange={() => {
                  setIsDarkMode(!isDarkMode);
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Sidebar;
