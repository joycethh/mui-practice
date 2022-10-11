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
        {/* logo section */}

        <svg
          viewBox="0 0 36 36"
          fill="none"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
        >
          <title>FunGet</title>
          <mask
            id="mask__beam"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="36"
            height="36"
          >
            <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
          </mask>
          <g mask="url(#mask__beam)">
            <rect width="36" height="36" fill="#0c8f8f"></rect>
            <rect
              x="0"
              y="0"
              width="36"
              height="36"
              transform="translate(4 4) rotate(230 18 18) scale(1.2)"
              fill="#ffad08"
              rx="6"
            ></rect>
            <g transform="translate(6 -2) rotate(0 18 18)">
              <path
                d="M15 21c2 1 4 1 6 0"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
              ></path>
              <rect
                x="14"
                y="14"
                width="1.5"
                height="2"
                rx="1"
                stroke="none"
                fill="#000000"
              ></rect>
              <rect
                x="20"
                y="14"
                width="1.5"
                height="2"
                rx="1"
                stroke="none"
                fill="#000000"
              ></rect>
            </g>
          </g>
        </svg>

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

          <Fab size="small" sx={{ display: { md: "none" } }}>
            <SearchIcon />
          </Fab>

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
