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
import { SlidesContainer } from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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
  }, [id, dispatch]);

  return (
    <>
      <Box
        sx={{
          paddingTop: 2,
          // paddingLeft: { lg: 18, md: 10 },
          // paddingRight: { lg: 18, md: 5 },
        }}
      >
        <Stack direction="row" justifyContent="center" spacing={3}>
          {/* gallery carousel */}
          <SlidesContainer>
            <Carousel thumbWidth="100px" thumbHeight="100px">
              {post &&
                post.image.map((element, index) => (
                  <div key={index}>
                    <img
                      src={element}
                      alt=""
                      style={{ width: "auto", maxWidth: 600, height: "auto" }}
                    />
                  </div>
                ))}
            </Carousel>
          </SlidesContainer>

          {/* post message section + users details  section */}
          <Box
            flex={2}
            sx={{ display: { sm: "none", md: "block" }, maxWdith: 400 }}
          >
            <Card>
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
