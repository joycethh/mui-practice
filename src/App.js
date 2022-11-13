import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { DarkTheme, LightTheme } from "./theme";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import PostDetail from "./featuers/posts/PostDetail";
import AuthForm from "./featuers/users/AuthForm";
import UpdatePost from "./featuers/posts/UpdatePost";

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
            <Route path="/posts/:postId" element={<PostDetail />} />
            <Route path="/posts/edit/:postId" element={<UpdatePost />} />
            <Route path="/users" element={<AuthForm />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
