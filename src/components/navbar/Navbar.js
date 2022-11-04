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
  MenuItem,
  Popover,
  List,
  ListItem,
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
  console.log("initialUser", initialUser);
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
              <IconButton onClick={() => setOpen(true)} sx={{ p: 0 }}>
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
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={() => setOpen(false)}
            >
              <MenuItem>
                <Logout /> Log out
              </MenuItem>
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
