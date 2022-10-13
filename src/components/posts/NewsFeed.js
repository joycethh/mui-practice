import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";
import Create from "../compose/Create";
const NewsFeed = () => {
  return (
    <Box flex={4} p={2}>
      <Create />
      <Post />
    </Box>
  );
};

export default NewsFeed;
