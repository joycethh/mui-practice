import React, { useState } from "react";
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
  Fab,
} from "@mui/material";

import {
  AcUnit,
  Mail,
  CircleNotifications,
  Search as SearchIcon,
} from "@mui/icons-material";
import Add from "./Add";

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
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          JT
        </Typography>
        <AcUnit sx={{ display: { xs: "block", sm: "none" } }} />

        {/* search bar */}
        <Search>
          <InputBase placeholder="search..." />
        </Search>

        <Fab
          size="small"
          sx={{ display: { xs: "block", sm: "none", md: "none", lg: "none" } }}
        >
          <SearchIcon />
        </Fab>

        {/* icons section */}
        <Add />
        <Icons>
          <Badge badgeContent={2} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={3} color="error">
            <CircleNotifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} onClick={handleClick} />
        </Icons>

        <MobileIcons onClick={handleClick}>
          <Avatar sx={{ width: 30, height: 30 }} />
          <Typography variant="h6">User name</Typography>
        </MobileIcons>
      </StyledToolbar>

      {/* dropdown menu section */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
