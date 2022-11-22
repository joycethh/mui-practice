import React from "react";
import {
  Tooltip,
  Typography,
  IconButton,
  Checkbox,
  CardActions,
} from "@mui/material";
import { ThumbUp, Star, ThumbUpOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { likePost } from "./postsSlice";

const Reactions = ({ post }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    console.log("like button clicked");
    dispatch(likePost(post._id));
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

      <Tooltip title="save" arrow>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<Star />} checkedIcon={<Star color="red" />} />
        </IconButton>
      </Tooltip>
    </CardActions>
  );
};

export default Reactions;
