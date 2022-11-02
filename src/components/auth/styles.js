import { Box, Paper, styled } from "@mui/material";

export const LogoContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(1),
}));

export const AuthContainer = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
}));

export const BtnWrapper = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(3),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));
