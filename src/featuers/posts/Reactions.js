import React, { useState } from "react";
import {
  Tooltip,
  Typography,
  IconButton,
  Checkbox,
  CardActions,
  TextField,
  Box,
  Button,
  Collapse,
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
    setOpenDialog(false);
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
    <>
      <div>
        <Tooltip title="like" arrow>
          <Button aria-label="likes" onClick={handleLike}>
            <Likes />
          </Button>
        </Tooltip>

        <Tooltip title="comment" arrow>
          <IconButton
            aria-label="comment"
            onClick={() => setOpenDialog((prev) => !prev)}
          >
            <ChatBubbleOutline />
          </IconButton>
        </Tooltip>

        <Tooltip title="save" arrow>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<Star />} checkedIcon={<Star color="red" />} />
          </IconButton>
        </Tooltip>
      </div>

      <Box sx={{ maxWidth: 690, p: 1 }}>
        <div>
          <Collapse in={openDialog}>
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
            <Button
              onClick={() => setOpenDialog(false)}
              variant="outlined"
              size="small"
              sx={{ mr: 1 }}
            >
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSubmit} size="small">
              Send
            </Button>
          </Collapse>
        </div>
      </Box>
    </>
  );
};

export default Reactions;
