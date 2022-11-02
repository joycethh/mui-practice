import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import {
  Container,
  Grid,
  Typography,
  Button,
  Link,
  Divider,
} from "@mui/material";
import { LogoContainer, AuthContainer } from "./styles";
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

  const handleSubmit = () => {
    console.log("submited");
  };
  return (
    <>
      <Container maxWidth="sm">
        <LogoContainer>
          <Typography variant="h3">Funget</Typography>
        </LogoContainer>
        <AuthContainer elevation={0}>
          {/* title */}
          <Grid
            container
            spacing={2}
            paddingLeft={2}
            paddingRight={2}
            mt={1}
            mb={1}
            sx={{ alignItems: "center" }}
          >
            <Grid item xs={6}>
              <Typography variant="h6">
                {isSignup ? "Register" : "Log in"}
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ alignItems: "center" }}>
              {isSignup ? (
                <>
                  <Typography vairant="body1" sx={{ float: "right" }}>
                    Have an account ? <Link underline="none">Login</Link>
                  </Typography>
                </>
              ) : (
                <>
                  <Typography vairant="body1" sx={{ float: "right" }}>
                    or <Link underline="none">Create an account</Link>
                  </Typography>
                </>
              )}
            </Grid>
          </Grid>

          <form onSubmit={handleSubmit}>
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
                  onClick={handleSubmit}
                >
                  {isSignup ? "Register" : "Log in"}
                </Button>
              </Grid>
            </Grid>
          </form>

          {/* google auth */}
          <Grid
            container
            spacing={2}
            paddingLeft={2}
            paddingRight={2}
            mt={2}
            mb={3.5}
          >
            <Grid item xs={12}>
              <Divider>or {isSignup ? "register with" : "log in with"}</Divider>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </Grid>
          </Grid>
        </AuthContainer>
      </Container>
    </>
  );
};

export default Auth;
