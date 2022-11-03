import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { DarkTheme, LightTheme } from "./theme";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import PostDetails from "./components/posts/PostDetails";
import Auth from "./components/auth/Auth";

const ID = process.env.REACT_APP_GOOGLE_ID;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <GoogleOAuthProvider clientId={ID}>
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
            <Route path="/users" element={<Auth />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
