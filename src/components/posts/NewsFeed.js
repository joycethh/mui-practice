import React, { useState, useEffect } from "react";
import { Box, Card, CircularProgress, styled } from "@mui/material";
import Post from "./Post";
import Create from "../compose/Create";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../actions/postsAction";

const LoadingWrapper = styled(Card)(({ theme }) => ({
  elevation: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  marginTop: theme.spacing(2),
  maxWidth: 690,
  height: "25vh",
}));
const NewsFeed = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (!posts) return null;
  if (isLoading) {
    return (
      <Box flex={4} pt={1} sx={{ display: { sm: "block" } }}>
        <Create currentId={currentId} setCurrentId={setCurrentId} />
        <LoadingWrapper>
          <CircularProgress />
        </LoadingWrapper>
      </Box>
    );
  }

  return (
    <Box flex={4} pt={1} sx={{ display: { sm: "block" } }}>
      <Create currentId={currentId} setCurrentId={setCurrentId} />
      {/* <UpdatePost currentId={currentId} setCurrentId={setCurrentId} /> */}
      {posts &&
        posts.length > 0 &&
        posts.map((post) => (
          <div key={post._id}>
            <Post
              currentId={currentId}
              setCurrentId={setCurrentId}
              post={post}
            />
          </div>
        ))}
    </Box>
  );
};

export default NewsFeed;
