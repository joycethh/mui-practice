import React, { useState } from "react";
<<<<<<< HEAD
=======
import { useNavigate } from "react-router-dom";
import moment from "moment";
>>>>>>> 4da107c43d1ee60b55f44ef9ea5524460f5d50e5
import {
  Tooltip,
  Typography,
  IconButton,
<<<<<<< HEAD
  Checkbox,
  Box,
  Button,
  Collapse,
=======
  TextField,
  Box,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
>>>>>>> 4da107c43d1ee60b55f44ef9ea5524460f5d50e5
} from "@mui/material";
import {
  ThumbUp,
  ThumbUpOutlined,
  ChatBubbleOutline,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { likePost, getPostsError } from "./postsSlice";

const Reactions = ({ post }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const postsError = useSelector(getPostsError);
  const dispatch = useDispatch();
<<<<<<< HEAD
=======
  const navigate = useNavigate();
  const comments = useSelector((state) => state.posts.comments);
>>>>>>> 4da107c43d1ee60b55f44ef9ea5524460f5d50e5

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

<<<<<<< HEAD
=======
  const handleSubmit = () => {
    const commentInput = { ...comment, content: comment };
    dispatch(commentPost({ postId: post._id, content: commentInput }));

    setOpenDialog(false);
    setComment("");
    navigate(`/posts/${post._id}`);
  };

>>>>>>> 4da107c43d1ee60b55f44ef9ea5524460f5d50e5
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
      </div>

      <Box sx={{ maxWidth: 690, p: 1 }}>
        <div>
          <Collapse in={openDialog}>
<<<<<<< HEAD
            Comment function is coming soon. So does the save function.
=======
            <List dense={true}>
              {comments?.map((comment, index) => {
                return (
                  <>
                    <ListItem alignItems="flex-start" key={index}>
                      <ListItemAvatar>
                        <Avatar
                          alt={comment.authorName}
                          src={comment.authorAvatar}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={comment.authorName}
                        secondary={
                          <React.Fragment>
                            {comment.content}
                            <Typography
                              sx={{ display: "inline", float: "right" }}
                              component="span"
                              variant="body2"
                            >
                              {moment(comment.createdAt).fromNow()}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </>
                );
              })}
              <TextField
                placeholder="Write your reply"
                variant="standard"
                autoFocus
                fullWidth
                name="comments"
                onChange={(e) => {
                  setComment({ [e.target.name]: e.target.value });
                }}
                sx={{ marginTop: 0.8 }}
              />
            </List>
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
>>>>>>> 4da107c43d1ee60b55f44ef9ea5524460f5d50e5
          </Collapse>
        </div>
      </Box>
    </>
  );
};

export default Reactions;
