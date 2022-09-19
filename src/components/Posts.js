import React from "react";
import { red } from "@mui/material/colors";
import {
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
import { MoreVert, Favorite, Share } from "@mui/icons-material";
const Posts = () => {
  return (
    <Card sx={{ margin: 3 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Post"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://unsplash.com/photos/x-XwnC7FgFM"
        alt="mountain"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Layers of moutain.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<Favorite />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Posts;
