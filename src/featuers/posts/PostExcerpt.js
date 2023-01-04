import React from "react";
import moment from "moment";

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
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import Reactions from "./Reactions";

const PostExcerpt = ({ post }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log("user", user);
  const isAuthor =
    user?.result.sub === post.authorId || user?.result._id === post.authorId;
  console.log("isAuthor", isAuthor);
  const navigate = useNavigate();

  const openPost = () => {
    navigate(`/posts/${post._id}`);
  };

  return (
    <Card sx={{ maxWidth: 690, mr: 2, ml: 2, mt: 2, mb: 1 }} elevation={0}>
      <CardHeader
        avatar={<Avatar alt={post.authorName} src={post.authorAvatar}></Avatar>}
        action={
          isAuthor && (
            <Tooltip title="Edit">
              <IconButton onClick={() => navigate(`/posts/edit/${post._id}`)}>
                <MoreVert />
              </IconButton>
            </Tooltip>
          )
        }
        title={post.userName}
        titleTypographyProps={{ textTransform: "capitalize" }}
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
        {post?.image && post?.image?.length > 0 && (
          <ImageList cols={3} sx={{ maxWidth: 780 }}>
            {post.image.map((element, index) => (
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
        )}
      </ButtonBase>

      <Reactions post={post} />
      {/* <Comments /> */}
    </Card>
  );
};

export default PostExcerpt;
