import React from "react";
import { red } from "@mui/material/colors";
import {
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
import {
  MoreVert,
  Favorite,
  Share,
  Delete,
  ThumbUp,
} from "@mui/icons-material";

import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/postsAction";

//TODO
// 1. if user, update card header info
const Post = ({ post }) => {
  const dispatch = useDispatch();
  const imageArray = post.image;

  const handleDelete = () => {
    dispatch(deletePost(post._id));
  };
  return (
    <Card sx={{ maxWidth: 690, mr: 2, ml: 2, mt: 2, mb: 1 }} elevation={0}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>J</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Post"
        subheader={post.createdAt}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.message}
        </Typography>
      </CardContent>
      <ImageList cols={3} sx={{ maxWidth: 780 }}>
        {imageArray.map((element, index) => (
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
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<ThumbUp />}
              checkedIcon={<ThumbUp color="primary" />}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="save" arrow>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<Favorite />}
              checkedIcon={<Favorite color="red" />}
            />
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

        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
