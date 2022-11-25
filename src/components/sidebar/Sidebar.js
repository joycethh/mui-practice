import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Paper,
} from "@mui/material";
import { List as ListIcon, FolderSpecial, Logout } from "@mui/icons-material";
import { logout } from "../../featuers/users/usersSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

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

            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Log out" />
              </ListItemButton>
            </ListItem>
          </List>
        </Paper>
      </Box>
    </section>
  );
};

export default Sidebar;
