import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { DarkTheme, LightTheme } from "./theme";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
      <CssBaseline />
      <Navbar />
      <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </ThemeProvider>
  );
}

export default App;
