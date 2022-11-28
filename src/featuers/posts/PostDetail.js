import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
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
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { selectPostById, getPostsStatus } from "./postsSlice";
import Reactions from "./Reactions";

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
  const navigate = useNavigate();
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, postId));

  const postsStatus = useSelector(getPostsStatus);

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
          flex={6}
          sx={{
            display: "block",
          }}
        >
          <Card elevation={0}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: grey[500] }}
                  alt={post.authorName}
                  src={post.authorAvatar}
                ></Avatar>
              }
              title={post.authorName}
              subheader={moment(post.createdAt).fromNow()}
              action={
                <Tooltip title="Edit">
                  <IconButton
                    onClick={() => navigate(`/posts/edit/${post._id}`)}
                  >
                    <MoreVert />
                  </IconButton>
                </Tooltip>
              }
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.message}
              </Typography>
            </CardContent>

            {/* gallery carousel */}

            <ImageCarousel>
              {post &&
                post.image.length > 0 &&
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

            {/* actions section */}
            <Reactions post={post} />
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default PostDetails;
