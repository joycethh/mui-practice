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
  styled,
  InputBase,
  Badge,
} from "@mui/material";

import {
  AcUnit,
  Search as SearchIcon,
  Mail,
  CircleNotifications,
} from "@mui/icons-material";

import Add from "./Add";

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
        {/* WEB: search bar  && notification*/}
        <ToolBox>
          <SearchBox>
            <InputBase placeholder="search..." />
          </SearchBox>
          <IconsBox>
            <Box sx={{ paddingRight: 2 }}>
              <Badge badgeContent={2} color="error">
                <Mail />
              </Badge>
            </Box>
            <Box>
              <Badge badgeContent={3} color="error">
                <CircleNotifications />
              </Badge>
            </Box>
          </IconsBox>
        </ToolBox>

        <Box
          sx={{
            display: "flex",
          }}
        >
          {/* add icon && MOBILE search icon && user accounnt */}
          <Add />
          <IconButton sx={{ display: { md: "none" } }}>
            <Fab size="small">
              <SearchIcon />
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

const SearchBox = styled("div")(({ theme }) => ({
  backgroundColor: "#eee",
  padding: theme.spacing(0, 2),
  borderRadius: theme.shape.borderRadius,
  width: "50%",
}));

const IconsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(0, 3),
}));

const ToolBox = styled(Box)(({ theme }) => ({
  justifyContent: "space-between",
  padding: theme.spacing(0, 4),
  width: "80%",
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

export default Navbar;
