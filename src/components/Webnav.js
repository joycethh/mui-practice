import React from "react";
import { styled, Box, InputBase, Badge } from "@mui/material";
import { Mail, CircleNotifications } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
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

const WebNav = () => {
  return (
    <ToolBox>
      <Search>
        <InputBase placeholder="search..." />
      </Search>
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
  );
};

export default WebNav;
