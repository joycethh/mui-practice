import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { useDispatch } from "react-redux";
import {
  Search as SearchIcon,
  Home,
  LocalFireDepartment,
  Logout,
} from "@mui/icons-material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  paperProps,
} from "./styles";
import { amber } from "@mui/material/colors";
import { logout } from "../../actions/authAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  console.log("user initial value", user);

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
      setUser(JSON.parse(localStorage.getItem("profile")));
    }
  }, [setUser]);

  const handleLogout = () => {
    console.log("log out clicked");
    dispatch(logout());
    setUser(null);
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
              PaperProps={paperProps}
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
          <Box flex={1} sx={{ display: "block" }}>
            <Button
              color="inherit"
              variant="outlined"
              component={Link}
              to="/users"
            >
              Log in
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
