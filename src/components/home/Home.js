import React from "react";
import { Stack } from "@mui/material";

import Rightbar from "../rightbar/Rightbar";
import NewsFeed from "../posts/NewsFeed";
import Sidebar from "../sidebar/Sidebar";
const Home = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ paddingLeft: 20, paddingRight: 20 }}
      >
        <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <NewsFeed />
        <Rightbar />
      </Stack>
    </>
  );
};

export default Home;
