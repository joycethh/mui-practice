import React, { useEffect, useState } from "react";
import moment from "moment";
import { grey } from "@mui/material/colors";
import {
  ButtonBase,
  Tooltip,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  ImageList,
  ImageListItem,
  CardContent,
  Typography,
  CardActions,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import {
  MoreVert,
  Star,
  Delete,
  ThumbUp,
  ThumbUpOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { likePost, deletePost } from "../../actions/postsAction";

//TODO
// 1. if user, update card header info

const Post = ({ post, currentId, setCurrentId }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imageArray = post.image;

  const openPost = () => {
    navigate(`/posts/${post._id}`);
  };
  useEffect(() => {
    setCurrentId(post._id);
  }, [post._id]);

  const clickOpenAlert = () => {
    setOpenAlert(true);
  };
  const closeAlert = () => {
    setOpenAlert(false);
  };
  const handleDelete = () => {
    dispatch(deletePost(post._id));
  };

  const handleLike = () => {
    dispatch(likePost(post._id));
  };
  return (
    <Card sx={{ maxWidth: 690, mr: 2, ml: 2, mt: 2, mb: 1 }} elevation={0}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: grey[500] }}>J</Avatar>}
        action={
          <Tooltip title="Open">
            <IconButton
              aria-label="open"
              onClick={() => {
                setCurrentId(post._id);
                console.log("currentId in post", currentId);
                navigate(`/posts/${post._id}/edit`);
              }}
            >
              <MoreVert />
            </IconButton>
          </Tooltip>
        }
        title="user's name"
        subheader={moment(post.createdAt).fromNow()}
      />
      <ButtonBase
        component="span"
        onClick={openPost}
        sx={{ display: "list-item" }}
      >
        <CardContent>
          <Typography variant="body2" color="text">
            {post.message}
          </Typography>
        </CardContent>

        <ImageList cols={3} sx={{ maxWidth: 780 }}>
          {imageArray &&
            imageArray.length > 0 &&
            imageArray.map((element, index) => (
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
      </ButtonBase>

      <CardActions disableSpacing>
        <Tooltip title="like" arrow>
          <IconButton aria-label="likes" onClick={handleLike}>
            {post.likes > 0 ? <ThumbUp color="primary" /> : <ThumbUpOutlined />}
          </IconButton>
        </Tooltip>
        <Typography>{post.likes}</Typography>
        <Tooltip title="save" arrow>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<Star />} checkedIcon={<Star color="red" />} />
          </IconButton>
        </Tooltip>

        <Tooltip title="delete" arrow>
          <IconButton aria-label="add to favorites" onClick={clickOpenAlert}>
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
    </Card>
  );
};

export default Post;
