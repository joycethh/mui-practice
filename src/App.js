import { useState } from "react";
import Rightbar from "./components/rightbar/Rightbar";
import NewsFeed from "./components/posts/NewsFeed";
import Sidebar from "./components/sidebar/Sidebar";
import { Stack, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import { DarkTheme, LightTheme } from "./theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
      <CssBaseline />
      <Navbar />

      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-between"
        sx={{ paddingLeft: 20, paddingRight: 20 }}
      >
        <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <NewsFeed />
        <Rightbar />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
