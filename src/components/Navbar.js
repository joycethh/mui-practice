import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Fab,
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

import { AcUnit, Search } from "@mui/icons-material";

import Add from "./Add";
import Webnav from "./Webnav";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const open = Boolean(anchorElUser);

  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="sticky">
      <Toolbar>
        <AcUnit sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            display: { xs: "none", md: "flex" },
            color: "inherit",
            textDecoration: "none",
          }}
        >
          JT
        </Typography>
        {/* search bar  && notification*/}
        <Webnav />

        <Box
          sx={{
            display: "flex",
          }}
        >
          {/* add icon && mobile search icon && user accounnt */}
          <Add />
          <IconButton sx={{ display: { md: "none" } }}>
            <Fab size="small">
              <Search />
            </Fab>
          </IconButton>

          <Tooltip title="Account settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Joyce" src="" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
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
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
