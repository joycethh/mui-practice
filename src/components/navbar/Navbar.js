import React, { useState, useEffect } from "react";
import decode from "jwt-decode";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
  Button,
  Tooltip,
  Menu,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import {
  Search as SearchIcon,
  Home,
  LocalFireDepartment,
  Logout,
} from "@mui/icons-material";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import { amber } from "@mui/material/colors";
const Navbar = () => {
  const initialUser = JSON.parse(localStorage.getItem("profile"));

  const [user, setUser] = useState(initialUser);
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  //1. check if there is token, if token expired
  //2. not, setUser
  //3. expired, log out user
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        console.log("expired");
      }

      setUser(initialUser);
    }
  }, [setUser]);

  const handleLogout = () => {
    console.log("log out clicked");
  };
  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* logo section */}
        <Typography variant="h6">Funget</Typography>

        {/*  search bar */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        {/* nav icons  */}

        <Box flex={5} sx={{ display: "block" }}>
          <IconButton color="inherit">
            <Home />
          </IconButton>
          <IconButton color="inherit">
            <LocalFireDepartment />
          </IconButton>
        </Box>
        {user?.result ? (
          <Box flex={1} sx={{ display: "block" }}>
            <Tooltip title="Account Setting">
              <IconButton
                onClick={(e) => {
                  setOpen(true);
                  setAnchorElUser(e.currentTarget);
                }}
                sx={{ p: 0 }}
              >
                <Avatar
                  alt={user.result.username}
                  src={user.result.picture}
                  sx={{ width: 30, height: 30, bgcolor: amber[700] }}
                >
                  {user?.result.username.charAt(0)}
                </Avatar>
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={anchorElUser}
              open={open}
              onClose={() => {
                setOpen(false);
                setAnchorElUser(null);
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <ListItemButton onClick={handleLogout} dense={true}>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Log out" />
              </ListItemButton>
            </Menu>
          </Box>
        ) : (
          <Button>Log in</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
