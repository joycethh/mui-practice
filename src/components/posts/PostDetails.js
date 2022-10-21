import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { grey } from "@mui/material/colors";
import {
  Box,
  Card,
  Typography,
  Avatar,
  CardHeader,
  CardContent,
  Stack,
} from "@mui/material";
import MyCarousel from "./Carousel";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../actions/postsAction";
//1. background image
//2. image gallary
//3. acount details

const PostDetails = () => {
  const { id } = useParams();
  console.log("id", id);
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);
  console.log("post", post);

  useEffect(() => {
    dispatch(getPost(id));
    // eslint-disable-next-line
  }, [id]);

  if (!post) return null;
  if (post.length < 0) return null;

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
              {/* {post.image.map((element, index) => (
                <div key={index} style={{ backgroundColor: "#304352" }}>
                  <img
                    src={element}
                    alt=""
                    style={{ maxWidth: 600, height: "100%" }}
                  />
                </div>
              ))} */}
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
                subheader={post.createdAt}
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
