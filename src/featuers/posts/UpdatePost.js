import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { grey } from "@mui/material/colors";
import {
  CardActions,
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
  TextField,
} from "@mui/material";

import { deletePost, updatePost, selectPostById } from "./postsSlice";

const Update = () => {
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, postId));

  const [message, setMessage] = useState(post?.message);
  const [openAlert, setOpenAlert] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onMssgChange = (e) => {
    setMessage(e.target.value);
  };
  const handleDelete = () => {
    try {
      dispatch(deletePost(post._id));
      navigate("/");
    } catch (err) {
      console.log("Failed to delete post", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const updatedPostInput = { ...post, message: message };
      dispatch(updatePost({ postId: post._id, updatedPost: updatedPostInput }));
      navigate(`/posts/${postId}`);
      setMessage("");
    } catch (err) {
      console.log("Failed to edit the post", err);
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

        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <CardContent>
            <TextField
              variant="outlined"
              name="message"
              multiline
              fullWidth
              value={message}
              rows={2}
              onChange={onMssgChange}
            />

            {/* rendered images */}
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
          </CardContent>

          {/* action area */}
          <CardActions>
            <Button variant="outlined" onClick={() => setOpenAlert(true)}>
              Delete
            </Button>
            <Dialog open={openAlert} onClose={() => setOpenAlert(false)}>
              <DialogTitle>Move to trash?</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  The action can not be reversed. Are you sure to delete the
                  post?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenAlert(false)}>Cancel</Button>
                <Button onClick={handleDelete} color="secondary">
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
            >
              Edit
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};

export default Update;
