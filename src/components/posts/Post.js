import React from "react";
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
} from "@mui/material";
import { MoreVert, Star, Delete, ThumbUp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { likePost, deletePost } from "../../actions/postsAction";

//TODO
// 1. if user, update card header info

const Post = ({ post, currentId, setCurrentId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imageArray = post.image;
  const openPost = () => {
    navigate(`/posts/${post._id}`);
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
            <IconButton aria-label="open" onClick={openPost}>
              <MoreVert />
            </IconButton>
          </Tooltip>
        }
        title="author's name"
        subheader={post.createdAt}
      />
      <ButtonBase
        component="span"
        onClick={openPost}
        sx={{ display: "list-item" }}
      >
        <CardContent>
          <Typography variant="body2" color="text.secondary">
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
      {/* loop through nested image array
         {imageArray.map((element) =>
          element.map((src, index) => (
            <div key={index}>
              <img src={src} alt="" width="194" />
            </div>
          ))
        )} */}

      <CardActions disableSpacing>
        <Tooltip title="like" arrow>
          <IconButton aria-label="likes" onClick={handleLike}>
            <ThumbUp /> {post.likes}
          </IconButton>
        </Tooltip>

        <Tooltip title="save" arrow>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<Star />} checkedIcon={<Star color="red" />} />
          </IconButton>
        </Tooltip>

        <Tooltip title="delete" arrow>
          <IconButton aria-label="add to favorites" onClick={handleDelete}>
            <Checkbox
              icon={<Delete />}
              checkedIcon={<Delete color="warning" />}
            />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default Post;
