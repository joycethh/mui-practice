import React, { useState } from "react";
import {
  Tooltip,
  Typography,
  IconButton,
  Checkbox,
  CardActions,
  TextField,
  Dialog,
  DialogActions,
  Button,
} from "@mui/material";
import {
  ThumbUp,
  Star,
  ThumbUpOutlined,
  ChatBubbleOutline,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { commentPost, likePost } from "./postsSlice";

const Reactions = ({ post }) => {
  const [comments, setComments] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likePost(post._id));
  };

  const handleSubmit = () => {
    console.log("comments input", comments);
    dispatch(commentPost({ postId: post._id, comments: comments }));
  };
  const Likes = () => {
    if (post.likes.length > 1) {
      return (
        <>
          <ThumbUp color="primary" />
          <Typography ml={0.5}>{post.likes.length - 1}</Typography>
        </>
      );
    }
    return <ThumbUpOutlined />;
  };

  return (
    <CardActions disableSpacing>
      <Tooltip title="like" arrow>
        <IconButton aria-label="likes" onClick={handleLike}>
          <Likes />
        </IconButton>
      </Tooltip>

      <Tooltip title="comment" arrow>
        <IconButton aria-label="comment" onClick={() => setOpenDialog(true)}>
          <ChatBubbleOutline />
        </IconButton>
      </Tooltip>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <TextField
          autoFocus
          fullWidth
          margin="dense"
          label="comments"
          name="comments"
          onChange={(e) => {
            setComments({ [e.target.name]: e.target.value });
          }}
        />
        <DialogActions>
          <Button varaint="outlined" onClick={() => setOpenDialog(false)}>
            Cancel
          </Button>
          <Button varaint="contained" color="secondary" onClick={handleSubmit}>
            Send
          </Button>
        </DialogActions>
      </Dialog>

      <Tooltip title="save" arrow>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<Star />} checkedIcon={<Star color="red" />} />
        </IconButton>
      </Tooltip>
    </CardActions>
  );
};

export default Reactions;
