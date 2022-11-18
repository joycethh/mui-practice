import { createTheme } from "@mui/material";

const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#007FFF", //blue
    },
    secondary: {
      main: "#FF731D", //orange
      light: "#ff7f31",
    },
    common: {
      black: "#1D1D1D",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#fff",
      defaultChannel: "255 255 255",
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        // dense: {
        //   height: 28,
        //   minHeight: 28,
        // },
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
      main: "#007FFF",
    },
    secondary: {
      main: "#ce93d8",
    },
    common: {
      black: "#1D1D1D",
      white: "#fff",
    },
    background: {
      default: "#001E3C",
      paper: "#0A1929",
      defaultChannel: "18 18 18",
    },
  },
});

export { LightTheme, DarkTheme };
