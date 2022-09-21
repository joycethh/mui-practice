import { createTheme } from "@mui/material";

const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#e57373",
    },
    background: {
      default: "#eeeeee",
    },
  },
});

const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#222831",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#212121",
    },
  },
});

export { LightTheme, DarkTheme };
