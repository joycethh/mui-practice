import React, { useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  Typography,
  TextField,
  Box,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Collapse,
  List,
} from "@mui/material";
import { commentPost } from "./postsSlice";

const Comments = ({ post, comments }) => {
  const [comment, setComment] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const commentInput = { ...comment, content: comment };
    dispatch(commentPost({ postId: post._id, content: commentInput }));

    setOpenDialog(false);
    setComment("");
  };

  return (
    <div>
      <Box sx={{ maxWidth: 690, p: 1 }}>
        <div>
          <Collapse in={openDialog}>
            <List dense={true}>
              {comments?.map((comment, index) => {
                console.log("index", index);
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
                value={comment}
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
          </Collapse>
        </div>
      </Box>
    </div>
  );
};

export default Comments;
