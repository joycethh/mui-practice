import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Switch,
  Paper,
} from "@mui/material";
import { List as ListIcon, Favorite, Brightness4 } from "@mui/icons-material";

const lists = [
  { text: "News Feed", icon: ListIcon, id: 1 },
  { text: "Favorite", icon: Favorite, id: 2 },
];

const Sidebar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Paper elevation={0}>
        <List>
          {lists.map((element) => (
            <ListItem disablePadding key={element.id}>
              <ListItemButton component="a" href={element.text}>
                <ListItemIcon>{<element.icon />}</ListItemIcon>
                <ListItemText primary={element.text} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItemButton>
            <ListItemIcon>
              <Brightness4 />
            </ListItemIcon>
            <Switch
              checked={isDarkMode}
              onChange={() => {
                setIsDarkMode(!isDarkMode);
              }}
            />
          </ListItemButton>
        </List>
      </Paper>
    </Box>
  );
};

export default Sidebar;
