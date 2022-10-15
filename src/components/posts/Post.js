import React from "react";
import { red } from "@mui/material/colors";
import {
  Tooltip,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Checkbox,
  sliderClasses,
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

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const imageArray = post.image;

  console.log("imageArray in Post", imageArray);
  const handleDelete = () => {
    dispatch(deletePost(post._id));
  };
  return (
    <Card sx={{ m: 2 }}>
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
      {/* <div style={{ backgroundColor: "pink", display: "flex" }}>
        {imageArray.map((element) =>
          element.map((src, index) => (
            <div key={index}>
              <img src={src} alt="" width="100" />
            </div>
          ))
        )}
      </div> */}
      <CardMedia height="194">
        {imageArray.map((element) =>
          element.map((src, index) => (
            <div key={index}>
              <img src={src} alt="" width="194" />
            </div>
          ))
        )}
      </CardMedia>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.message}
        </Typography>
      </CardContent>
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
