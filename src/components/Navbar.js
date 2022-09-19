import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

import { AcUnit, Mail, CircleNotifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(0, 2),
  borderRadius: theme.shape.borderRadius,
  width: "50%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const MobileIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          JT
        </Typography>
        <AcUnit sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={2} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={3} color="error">
            <CircleNotifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} />
        </Icons>
        <MobileIcons>
          <Avatar sx={{ width: 30, height: 30 }} />
          <Typography variant="h6">User name</Typography>
        </MobileIcons>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={true}
        onClose={() => {
          console.log("close clicked");
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={() => {
            console.log("close clicked");
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            console.log("close clicked");
          }}
        >
          My account
        </MenuItem>
        <MenuItem
          onClick={() => {
            console.log("close clicked");
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
