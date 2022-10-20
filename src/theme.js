import { createTheme } from "@mui/material";

const LightTheme = createTheme({
  palette: {
    mode: "light",
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
      main: "#304352",
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
