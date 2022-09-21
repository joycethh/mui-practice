import React, { useState } from "react";
import {
  Tooltip,
  Fab,
  Box,
  Modal,
  Typography,
  styled,
  TextField,
  Avatar,
  Stack,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  List,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  EmojiEmotions,
  KeyboardArrowUp,
  AddPhotoAlternate,
  PhotoCameraFront,
  EditLocationAlt,
} from "@mui/icons-material";

const Add = () => {
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Add">
        <IconButton onClick={handleOpenModal}>
          <Fab size="small">
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>

      <StyledModal open={openModal} onClose={handleCloseModal}>
        <Box
          width={400}
          height={200}
          bgcolor="background.paper"
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" component="h2" textAlign="center">
            Create Post
          </Typography>

          <PostBox>
            <Avatar sx={{ width: 30, height: 30, marginBottom: 2 }}>J</Avatar>
            <Typography vairant="span">User's Name</Typography>
          </PostBox>

          <TextField
            sx={{ width: "100%" }}
            multiline
            rows={3}
            variant="standard"
            placeholder="Share your thoughts"
          />

          <Box
            sx={{ display: "flex", justifyContent: "center", padding: 1.5 }}
            aria-controls={openMenu ? "basic-menu" : undefined}
          >
            <IconButton onClick={handleClick}>
              <KeyboardArrowUp />
            </IconButton>
          </Box>

          <Stack direction="row" spacing={1}>
            <List
              id="basic-menu"
              sx={{
                width: "100%",
                maxWidth: 400,
                bgcolor: "background.paper",
              }}
              component="menu"
              open={openMenu}
              onClose={handleCloseMenu}
            >
              {menuData.map((item) => (
                <ListItemButton key={item.id}>
                  <ListItemIcon>{<item.icon />}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              ))}
            </List>
          </Stack>
        </Box>
      </StyledModal>
    </>
  );
};

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const PostBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 10,
});

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

export default Add;
