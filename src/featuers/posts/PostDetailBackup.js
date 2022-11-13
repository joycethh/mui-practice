import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { grey } from "@mui/material/colors";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Card,
  Typography,
  Avatar,
  CardHeader,
  CardContent,
  Tooltip,
  CircularProgress,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { selectPostById, getPostsStatus } from "./postsSlice";

const ImageCarousel = ({ children }) => {
  const arrowStyles = {
    position: "absolute",
    zIndex: 3,
    top: "calc(50% - 40px)",
    width: 40,
    height: 40,
    cursor: "pointer",
    backgroundColor: "#2196f3",
    color: "#fff",
  };

  const indicatorStyles = {
    background: "#fff",
    width: 12,
    height: 12,
    display: "inline-block",
    margin: "0 12px",
    borderRadius: "50%",
    cursor: "pointer",
  };
  return (
    <Carousel
      dynamicHeight={true}
      showThumbs={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <IconButton
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 20 }}
          >
            <KeyboardArrowLeft />
          </IconButton>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <IconButton
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, right: 20 }}
          >
            <KeyboardArrowRight />
          </IconButton>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <span
              style={{ ...indicatorStyles, background: "#2196f3" }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <span
            style={{ ...indicatorStyles }}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      {children}
    </Carousel>
  );
};

const PostDetails = () => {
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, postId));

  const postsStatus = useSelector(getPostsStatus);
  const [openAlert, setOpenAlert] = useState(false);
  const closeAlert = () => {
    setOpenAlert(false);
  };
  const handleDelete = () => {
    // dispatch(deletePost(post._id));
    console.log("dispatch delete");
  };
  const clickOpenAlert = () => {
    setOpenAlert(true);
  };
  if (!post) {
    return (
      <section>
        <Typography variant="h4">Post not found!</Typography>
      </section>
    );
  }

  if (postsStatus === "loading") {
    return (
      <Paper>
        <CircularProgress />
      </Paper>
    );
  }

  return (
    <>
      <Box
        sx={{
          padding: 2,
          paddingLeft: { lg: 18, md: 10 },
          paddingRight: { lg: 18, md: 5 },
        }}
      >
        {/* post message section + users details  section */}
        <Box
          flex={2}
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            maxWdith: 400,
          }}
        >
          <Card elevation={0}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: grey[500] }}>J</Avatar>}
              title={post.author}
              subheader={moment(post.createdAt).fromNow()}
              action={
                <Tooltip title="delete" arrow>
                  <IconButton aria-label="delete post" onClick={clickOpenAlert}>
                    <Delete />
                  </IconButton>
                </Tooltip>
              }
            />
            <Dialog open={openAlert} onClose={closeAlert}>
              <DialogTitle>Move to trash?</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  The action can not be reversed. Are you sure to delete the
                  post?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={closeAlert}>Cancel</Button>
                <Button onClick={handleDelete} color="secondary">
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.message}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        {/* gallery carousel */}
        <Box
          flex={6}
          sx={{
            display: "block",
          }}
        >
          <ImageCarousel>
            {post &&
              post.image.map((element, index) => (
                <div key={index} style={{ backgroundColor: "#304352" }}>
                  <img
                    src={element}
                    alt=""
                    style={{ maxWidth: 600, height: "100%" }}
                  />
                </div>
              ))}
          </ImageCarousel>
        </Box>
        {/* comments section */}
        <Box sx={{ backgroundColor: "skyblue" }}>
          <p> comments</p>
        </Box>
      </Box>
    </>
  );
};

export default PostDetails;