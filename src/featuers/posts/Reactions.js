import React from "react";
import {
  Tooltip,
  Typography,
  IconButton,
  Checkbox,
  CardActions,
} from "@mui/material";
import { ThumbUp, Star, ThumbUpOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

const Reactions = ({ post }) => {
  const handleLike = () => {
    // dispatch(likePost(post._id));
    console.log("dispatch like");
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
