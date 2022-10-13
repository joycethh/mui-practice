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
} from "@mui/material";
import {
  MoreVert,
  Favorite,
  Share,
  Delete,
  ThumbUp,
} from "@mui/icons-material";

const Post = ({ id, post }) => {
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
      <CardMedia
        component="img"
        height="194"
        image={
          post.seletedFile ||
          "https://freerangestock.com/sample/128669/scenic-view-of-mountain-lake-.jpg"
        }
        alt="mountain"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip label="like">
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<ThumbUp />}
              checkedIcon={<ThumbUp sx={{ color: "red" }} />}
            />
          </IconButton>
        </Tooltip>

        <Tooltip label="save">
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<Favorite />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
        </Tooltip>

        <Tooltip label="delete">
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<Delete />} />
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
