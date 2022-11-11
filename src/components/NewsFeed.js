import React, { useState } from "react";
import { Box } from "@mui/material";
import Create from "../featuers/posts/Create";
import PostsLists from "../featuers/posts/PostsList";

const NewsFeed = () => {
  const [currentId, setCurrentId] = useState(0);
  return (
    <Box flex={4} pt={1} sx={{ display: { sm: "block" } }}>
      <Create currentId={currentId} setCurrentId={setCurrentId} />
      <PostsLists />
    </Box>
  );
};

export default NewsFeed;
