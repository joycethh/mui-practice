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
import { useDispatch, useSelector } from "react-redux";
import { commentPost, likePost, getPostsError, getComment } from "./postsSlice";

const Reactions = ({ post }) => {
  const [comment, setComment] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const postsError = useSelector(getPostsError);
  const dispatch = useDispatch();

  const commentsObjArry = post?.comments;
  console.log("commentsObjArry", commentsObjArry);

  if (postsError === "failed") {
    return (
      <section>
        <p>{postsError}</p>
      </section>
    );
  }

  const Likes = () => {
    if (post?.likes?.length > 0) {
      return (
        <>
          <ThumbUp color="primary" />
          <Typography ml={0.5}>{post?.likes?.length}</Typography>
        </>
      );
    }
    return <ThumbUpOutlined />;
  };

  const handleLike = () => {
    dispatch(likePost(post._id));
  };

  const handleSubmit = () => {
    const commentInput = { ...comment, content: comment };
    dispatch(commentPost({ postId: post._id, content: commentInput }));
    // dispatch(getComment(post._id));
    setOpenDialog(false);
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
            <List dense={true}></List>
            {/* {commentsObjArry?.map((comment, index) => (
              <>
                <ListItem alignItems="flex-start" key={index}>
                  <ListItemAvatar>
                    <Avatar
                      alt={comment.authorName}
                      src={comment.authorAvatar}
                    />
                  </ListItemAvatar>
                  <ListItemText>{JSON.parse(comment.content)}</ListItemText>
                  <ListItemText>{comment.content}</ListItemText>
                </ListItem>
                <Divider />
              </>
            ))} */}
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
