import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { grey } from "@mui/material/colors";
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
  ImageList,
  ImageListItem,
  Card,
  CardHeader,
  Avatar,
  CardContent,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

import Reactions from "./Reactions";

import { deletePost, selectPostById } from "./postsSlice";

const UpdatePost = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const { postId } = useParams();
  console.log("postId", postId);

  const post = useSelector((state) => selectPostById(state, postId));
  console.log("post", post);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    try {
      dispatch(deletePost(post));
      console.log("dispatch delete");
      navigate("/");
    } catch (err) {
      console.log("Failed to delete post", err);
    }
  };

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  return (
    <>
      <Card sx={{ maxWidth: 690, mr: 2, ml: 2, mt: 2, mb: 1 }} elevation={0}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: grey[500] }}>J</Avatar>}
          title="user's name"
          subheader={moment(post.createdAt).fromNow()}
        />
        <CardContent>
          <Typography variant="body2" color="text">
            {post.message}
          </Typography>
        </CardContent>
        <ImageList cols={3} sx={{ maxWidth: 780 }}>
          {post?.image &&
            post?.image.length > 0 &&
            post?.image.map((element, index) => (
              <ImageListItem key={index}>
                <img
                  src={element}
                  alt=""
                  loading="lazy"
                  style={{ maxHeight: 250, maxWidth: 250 }}
                />
              </ImageListItem>
            ))}
        </ImageList>
        <Tooltip title="Delete">
          <IconButton
            aria-label="delete post"
            onClick={() => setOpenAlert(true)}
          >
            <Delete />
          </IconButton>
        </Tooltip>
        <Dialog open={openAlert} onClose={() => setOpenAlert(false)}>
          <DialogTitle>Move to trash?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              The action can not be reversed. Are you sure to delete the post?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenAlert(false)}>Cancel</Button>
            <Button onClick={handleDelete} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    </>
  );
};

export default UpdatePost;
