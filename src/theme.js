import { createTheme } from "@mui/material";

const LightTheme = createTheme({
  palette: {
    mode: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#2196f3", //blue
    },
    secondary: {
      main: "#FF731D", //orange
      light: "#ff7f31",
    },
    background: {
      default: "#eeeeee",
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          height: 28,
          minHeight: 28,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        sizeSmall: {
          height: 30,
        },
      },
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
      default: "#304352",
    },
  },
});

export { LightTheme, DarkTheme };
