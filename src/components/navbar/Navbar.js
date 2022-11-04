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
} from "@mui/material";
import {
  Search as SearchIcon,
  Home,
  LocalFireDepartment,
} from "@mui/icons-material";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";

const Navbar = () => {
  const initialUser = JSON.parse(localStorage.getItem("profile"));
  console.log("initialUser", initialUser);
  const [user, setUser] = useState(initialUser);
  console.log("user", user);
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
  }, [setUser, initialUser, user?.token]);

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
            <Avatar
              alt={user.result.username}
              src={user.result.picture}
              sx={{ width: 30, height: 30 }}
            >
              {user?.result.username.charAt(0)}
            </Avatar>
          </Box>
        ) : (
          <Button>Log in</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
