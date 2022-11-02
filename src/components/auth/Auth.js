import React, { useState } from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import { LogoContainer, AuthContainer, BtnWrapper } from "./styles";
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
          <Typography variant="h5">
            {isSignup ? "Register" : "Log in"}
          </Typography>
          <Grid container spacing={2} paddingLeft={2} paddingRight={2}>
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
