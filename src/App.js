import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { DarkTheme, LightTheme } from "./theme";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import PostDetails from "./components/posts/PostDetails";
import UpdatePost from "./components/posts/UpdatePost";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/posts" />} />
          <Route
            path="/posts"
            element={
              <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
          <Route path="/posts/:id" element={<PostDetails />} />
          {/* <Route path="/posts/:id/edit" element={<UpdatePost />} /> */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
