import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
import { amber } from "@mui/material/colors";
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
import { logout } from "../../featuers/users/usersSlice";

const Navbar = () => {
  const initialUser = JSON.parse(localStorage.getItem("profile"));
  const token = initialUser?.token;

  const [user, setUser] = useState(initialUser);

  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
    }
    setUser(initialUser);
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

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
          <IconButton color="inherit" component={Link} to="/">
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
                  alt={user?.result?.name || user?.result?.username}
                  src={
                    user?.result?.picture || user?.result?.username.charAt(0)
                  }
                  sx={{ width: 30, height: 30, bgcolor: amber[700] }}
                >
                  {}
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
