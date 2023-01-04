import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
<<<<<<< HEAD
import { List as ListIcon, FolderSpecial } from "@mui/icons-material";
=======
import { List as ListIcon, FolderSpecial, Logout } from "@mui/icons-material";
import { logout } from "../../featuers/users/usersSlice";
>>>>>>> 4da107c43d1ee60b55f44ef9ea5524460f5d50e5

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/users");
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
<<<<<<< HEAD
=======

            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Log out" />
              </ListItemButton>
            </ListItem>
>>>>>>> 4da107c43d1ee60b55f44ef9ea5524460f5d50e5
          </List>
        </Paper>
      </Box>
    </section>
  );
};

export default Sidebar;
