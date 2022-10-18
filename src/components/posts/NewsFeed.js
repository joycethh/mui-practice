import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Post from "./Post";
import Create from "../compose/Create";

import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../actions/postsAction";

const NewsFeed = () => {
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Box flex={4} pt={1} sx={{ display: { sm: "block" } }}>
      <Create id={id} setId={setId} />
      {posts &&
        posts.length > 0 &&
        posts.map((post) => (
          <div key={post._id}>
            <Post setId={setId} post={post} />
          </div>
        ))}
    </Box>
  );
};

export default NewsFeed;
