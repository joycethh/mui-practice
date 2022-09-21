import { useState } from "react";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import { Box, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import { DarkTheme, LightTheme } from "./theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
