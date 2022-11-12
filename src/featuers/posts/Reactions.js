import React, { useState } from "react";
import {
  Tooltip,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  CardActions,
  Checkbox,
} from "@mui/material";
import { Delete, ThumbUp, Star, ThumbUpOutlined } from "@mui/icons-material";

const Reactions = ({ post }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const closeAlert = () => {
    setOpenAlert(false);
  };
  const handleDelete = () => {
    // dispatch(deletePost(post._id));
    console.log("dispatch delete");
  };
  const clickOpenAlert = () => {
    setOpenAlert(true);
  };
  return (
    <CardActions disableSpacing>
      <Tooltip title="like" arrow>
        <IconButton aria-label="likes" onClick={() => {}}>
          {post.likes > 0 ? <ThumbUp color="primary" /> : <ThumbUpOutlined />}
        </IconButton>
      </Tooltip>
      <Typography>{post.likes}</Typography>
      <Tooltip title="save" arrow>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<Star />} checkedIcon={<Star color="red" />} />
        </IconButton>
      </Tooltip>
      {/* if user */}
      <Tooltip title="Delete">
        <IconButton aria-label="delete post" onClick={clickOpenAlert}>
          <Delete />
        </IconButton>
      </Tooltip>
      <Dialog open={openAlert} onClose={closeAlert}>
        <DialogTitle>Move to trash?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The action can not be reversed. Are you sure to delete the post?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeAlert}>Cancel</Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </CardActions>
  );
};

export default Reactions;
