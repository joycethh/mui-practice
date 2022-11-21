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
  Logout,
  AccountCircle,
  Brightness4,
} from "@mui/icons-material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  paperProps,
  IconWrapper,
  AvatarIconWrapper,
} from "./styles";
import { logout } from "../../featuers/users/usersSlice";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const initialUser = JSON.parse(localStorage.getItem("profile"));
  const token = initialUser?.token;

  const [user, setUser] = useState(initialUser);
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
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>
            {/* logo section */}
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Funget
            </Typography>
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
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex" }}>
              <IconWrapper>
                <IconButton color="inherit" component={Link} to="/">
                  <Home />
                </IconButton>
              </IconWrapper>

              <IconWrapper>
                <IconButton
                  color="inherit"
                  onClick={() => {
                    setIsDarkMode(!isDarkMode);
                  }}
                >
                  <Brightness4 />
                </IconButton>
              </IconWrapper>

              {user?.result ? (
                <>
                  <Tooltip title="Account Setting">
                    <AvatarIconWrapper>
                      <IconButton
                        onClick={(e) => {
                          setAnchorElUser(e.currentTarget);
                        }}
                        sx={{ p: 0 }}
                      >
                        <Avatar
                          alt={user?.result?.name || user?.result?.username}
                          src={
                            user?.result?.picture ||
                            user?.result?.username.charAt(0)
                          }
                          sx={{ bgcolor: amber[700] }}
                        >
                          {}
                        </Avatar>
                      </IconButton>
                    </AvatarIconWrapper>
                  </Tooltip>

                  <Menu
                    anchorEl={anchorElUser}
                    open={Boolean(anchorElUser)}
                    onClose={() => {
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
                </>
              ) : (
                <Tooltip title="Sign in">
                  <IconWrapper>
                    <IconButton component={Link} to="/users" color="inherit">
                      <AccountCircle />
                    </IconButton>
                  </IconWrapper>
                </Tooltip>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default Navbar;
