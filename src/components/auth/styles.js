import { Box, Paper, styled } from "@mui/material";
import { Link } from "react-router-dom";

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

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
}));
