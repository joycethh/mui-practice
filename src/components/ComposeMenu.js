import { useState } from "react";
import {
  styled,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
} from "@mui/material";
import {
  KeyboardArrowUp,
  AddPhotoAlternate,
  PhotoCameraFront,
  EditLocationAlt,
  EmojiEmotions,
} from "@mui/icons-material";

const ComposeMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", padding: 1.5 }}>
        <IconButton onClick={handleClick}>
          <KeyboardArrowUp />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleCloseMenu}
          onClick={handleCloseMenu}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <StyledList>
            {menuData.map((item) => (
              <MenuItem key={item.id}>
                <ListItemIcon>{<item.icon />}</ListItemIcon>
                <ListItemText>{item.text} </ListItemText>
              </MenuItem>
            ))}
          </StyledList>
        </Menu>
      </Box>
    </>
  );
};

const StyledList = styled(MenuList)(({ theme }) => ({
  width: 448,
  borderRadius: 30,
}));

const menuData = [
  {
    id: 1,
    icon: EmojiEmotions,
    text: "Feelings",
  },
  {
    id: 2,
    icon: AddPhotoAlternate,
    text: "Image",
  },
  {
    id: 3,
    icon: PhotoCameraFront,
    text: "Videos",
  },
  {
    id: 4,
    icon: EditLocationAlt,
    text: "Location",
  },
];

export default ComposeMenu;
