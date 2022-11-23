import React, { useState } from "react";
import {
  Tooltip,
  Typography,
  IconButton,
  Checkbox,
  TextField,
  Box,
  Button,
  Collapse,
  ListItem,
  ListItemAvatar,
  ListItemText,
  List,
  Avatar,
  Divider,
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
  const [comment, setComment] = useState([""]);
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likePost(post._id));
  };

  const handleSubmit = () => {
    console.log("comments input", comment);
    dispatch(commentPost(post._id, comment));
    setOpenDialog(false);
  };

  const Likes = () => {
    if (post.likes.length > 0) {
      return (
        <>
          <ThumbUp color="primary" />
          <Typography ml={0.5}>{post.likes.length}</Typography>
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
            <List dense={true}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="" src="" sx={{ width: 35, height: 35 }} />
                </ListItemAvatar>
                <ListItemText
                  primary="user's name"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Comments body goes here
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
            <TextField
              placeholder="Write your reply"
              variant="standard"
              autoFocus
              fullWidth
              margin="dense"
              name="comments"
              onChange={(e) => {
                setComment({ [e.target.name]: e.target.value });
              }}
            />
            <Button
              onClick={() => setOpenDialog(false)}
              variant="outlined"
              size="small"
              sx={{ mr: 1, mt: 1 }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              size="small"
              sx={{ mr: 1, mt: 1 }}
            >
              Send
            </Button>
          </Collapse>
        </div>
      </Box>
    </>
  );
};

export default Reactions;
