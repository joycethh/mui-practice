import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Button, Stack, Box } from "@mui/material";
import { LogoContainer, AuthContainer, TitleWrapper } from "./styles";
import Input from "./Input";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Container maxWidth="sm">
        <LogoContainer>
          <Typography variant="h2">Funget</Typography>
        </LogoContainer>
        <AuthContainer elevation={0}>
          <Grid
            container
            spacing={2}
            paddingLeft={2}
            paddingRight={2}
            marginBottom={1}
            sx={{ backgroundColor: "pink", alignItems: "center" }}
          >
            <Grid item xs={6}>
              <Typography variant="h5">
                {isSignup ? "Register" : "Log in"}
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ alignItems: "center" }}>
              <Typography vairant="body1" sx={{ float: "right" }}>
                or <Link to="/auth/register">Create an account</Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            paddingLeft={2}
            paddingRight={2}
            sx={{ backgroundColor: "skyblue" }}
          >
            {isSignup && (
              <Input
                name="username"
                type="text"
                label="Name"
                autoFucus
                onChange={handleChange}
              />
            )}
            <Input
              name="email"
              type="email"
              label="Email Address"
              onChange={handleChange}
            />
            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              onChange={handleChange}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmedPassword"
                type={showPassword ? "text" : "password"}
                label="Confirm Password"
                onChange={handleChange}
                handleShowPassword={handleShowPassword}
              />
            )}
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                {isSignup ? "Register" : "Log in"}
              </Button>
            </Grid>
          </Grid>
        </AuthContainer>
      </Container>
    </>
  );
};

export default Auth;
