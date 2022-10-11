import React, { useState } from "react";
import {
  Tooltip,
  Box,
  Modal,
  Typography,
  styled,
  TextField,
  Avatar,
} from "@mui/material";

import { Edit } from "@mui/icons-material";
import ComposeMenu from "./ComposeMenu";

const MobileCreate = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Tooltip title="Add">
        <Edit onClick={handleOpenModal} />
      </Tooltip>

      <StyledModal open={openModal} onClose={handleCloseModal}>
        <Box
          width={400}
          height={200}
          bgcolor="background.paper"
          color="text.primary"
          p={3}
          borderRadius={2}
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
          <ComposeMenu />
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

export default MobileCreate;
