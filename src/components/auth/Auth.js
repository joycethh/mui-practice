import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { Container, Grid, Typography, Button, Divider } from "@mui/material";
import { LogoContainer, AuthContainer } from "./styles";
import Input from "./Input";
import { register, login } from "../../actions/authAction";
import axios from "axios";
import { RepeatOneSharp } from "@mui/icons-material";

const Auth = () => {
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const toggleMode = () => {
    setIsSignup(!isSignup);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:5000/users/login",
      formData
    );
    console.log("response", response);
    if (response.status === 200) {
      console.log("response is okay");
      localStorage.setItem("profile", JSON.stringify(response));
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (isSignup) {
  //     dispatch(register(formData));
  //   } else {
  //     dispatch(login(formData));
  //   }
  // };
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
            mb={1.5}
            sx={{ alignItems: "center" }}
          >
            <Grid item xs={6}>
              <Typography variant="h6">
                {isSignup ? "Register" : "Log in"}
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ alignItems: "center" }}>
              {isSignup ? (
                <div style={{ float: "right" }}>
                  <Typography
                    vairant="body1"
                    style={{ display: "inline-block" }}
                  >
                    Have an account?
                  </Typography>
                  <Button size="small" onClick={toggleMode}>
                    Login
                  </Button>
                </div>
              ) : (
                <div style={{ float: "right" }}>
                  <Typography
                    vairant="body1"
                    style={{ display: "inline-block" }}
                  >
                    or
                  </Typography>
                  <Button
                    disableRipple={true}
                    size="small"
                    onClick={toggleMode}
                  >
                    Create an account
                  </Button>
                </div>
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
                  handleChange={handleChange}
                />
              )}
              <Input
                name="email"
                type="email"
                label="Email Address"
                handleChange={handleChange}
              />
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                handleChange={handleChange}
                handleShowPassword={handleShowPassword}
              />
              {isSignup && (
                <Input
                  name="confirmedPassword"
                  type={showPassword ? "text" : "password"}
                  label="Confirm Password"
                  handleChange={handleChange}
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
