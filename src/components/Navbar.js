import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  InputBase,
  Box,
  ListItem,
} from "@mui/material";

import {
  Search as SearchIcon,
  Home,
  LocalFireDepartment,
} from "@mui/icons-material";

import MobileCreate from "./MobileCreate";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: (theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: (theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
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
        <Box component="Stack" sx={{ display: { xs: "flex" } }}>
          <ListItem>
            <Home />
          </ListItem>

          <ListItem>
            <LocalFireDepartment />
          </ListItem>

          <ListItem>
            <MobileCreate />
          </ListItem>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
