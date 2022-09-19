import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Switch,
} from "@mui/material";
import {
  Home,
  Article,
  Storefront,
  Event,
  Plagiarism,
  Group,
  Settings,
  Brightness4,
} from "@mui/icons-material";

const lists = [
  { text: "Homepage", icon: Home, id: 1 },
  { text: "News Feed", icon: Article, id: 2 },
  { text: "Market", icon: Storefront, id: 3 },
  { text: "Event", icon: Event, id: 4 },
  { text: "Pages", icon: Plagiarism, id: 5 },
  { text: "Groups", icon: Group, id: 6 },
  { text: "Setting", icon: Settings, id: 7 },
];

const Sidebar = () => {
  return (
    <Box flex={1} p={2}>
      <Box position="fixed">
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
            <Switch defaultChecked />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
