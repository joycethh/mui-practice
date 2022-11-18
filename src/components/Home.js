import React from "react";
import { Box, Stack } from "@mui/material";

import Rightbar from "./rightbar/Rightbar";
import NewsFeed from "./newsFeed/NewsFeed";
import Sidebar from "./sidebar/Sidebar";
const Home = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <main>
      <Box
        sx={{
          paddingLeft: { lg: 18, md: 10 },
          paddingRight: { lg: 18, md: 5 },
        }}
      >
        <Stack direction="row" justifyContent="center" spacing={1}>
          <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <NewsFeed />
          <Rightbar />
        </Stack>
      </Box>
    </main>
  );
};

export default Home;
