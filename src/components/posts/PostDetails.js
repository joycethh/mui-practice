import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { grey } from "@mui/material/colors";
import {
  Box,
  Card,
  Typography,
  Avatar,
  CardHeader,
  CardContent,
  Stack,
  CircularProgress,
  Paper,
} from "@mui/material";
import MyCarousel from "./Carousel";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../actions/postsAction";
//1. background image
//2. image gallary
//3. acount details

const PostDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { post, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPost(id));
    // eslint-disable-next-line
  }, [id]);

  if (!post) return null;
  if (isLoading) {
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
        <Stack direction="row" justifyContent="center" spacing={3}>
          {/* gallery carousel */}
          <Box
            flex={6}
            sx={{
              display: "block",
            }}
          >
            <MyCarousel>
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
            </MyCarousel>
          </Box>

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
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {post.message}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default PostDetails;
