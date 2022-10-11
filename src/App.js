import { useState } from "react";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import { Stack, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import { DarkTheme, LightTheme } from "./theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
      <CssBaseline />
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Feed />
        <Rightbar />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
