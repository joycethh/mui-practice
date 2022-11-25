import React, { useState } from "react";
import {
  Tooltip,
  Typography,
  IconButton,
  Checkbox,
  Box,
  Button,
  Collapse,
} from "@mui/material";
import {
  ThumbUp,
  Star,
  ThumbUpOutlined,
  ChatBubbleOutline,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { likePost, getPostsError } from "./postsSlice";

const Reactions = ({ post }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const postsError = useSelector(getPostsError);
  const dispatch = useDispatch();

  if (postsError === "failed") {
    return (
      <section>
        <p>{postsError}</p>
      </section>
    );
  }

  const Likes = () => {
    if (post?.likes?.length > 0) {
      return (
        <>
          <ThumbUp color="primary" />
          <Typography ml={0.5}>{post.likes.length}</Typography>
        </>
      );
    }
    return <ThumbUpOutlined />;
  };

  const handleLike = () => {
    dispatch(likePost(post._id));
  };

  return (
    <>
      <div>
        <Tooltip title="like" arrow>
          <Button aria-label="likes" onClick={handleLike}>
            <Likes />
          </Button>
        </Tooltip>

        <Tooltip title="comment" arrow>
          <IconButton
            aria-label="comment"
            onClick={() => setOpenDialog((prev) => !prev)}
          >
            <ChatBubbleOutline />
          </IconButton>
        </Tooltip>

        <Tooltip title="save" arrow>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<Star />} checkedIcon={<Star color="red" />} />
          </IconButton>
        </Tooltip>
      </div>

      <Box sx={{ maxWidth: 690, p: 1 }}>
        <div>
          <Collapse in={openDialog}>
            Comment function is coming soon. So does the save function.
          </Collapse>
        </div>
      </Box>
    </>
  );
};

export default Reactions;
