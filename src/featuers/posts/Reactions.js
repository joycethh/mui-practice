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
import { likesAdded } from "./postsSlice";

const Reactions = ({ post }) => {
  const dispatch = useDispatch();
  const handleLike = () => {
    dispatch(likesAdded({ postId: post._id }));
  };
  return (
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
    </CardActions>
  );
};

export default Reactions;
