import { createTheme } from "@mui/material/styles";
import { yellow, purple, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(20, 124, 41)",
      dark: "rgb(0, 76, 25)",
      //   main: yellow.A400,
      //   dark: yellow.A700,
    },
    secondary: {
      main: purple.A700,
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["Work Sans", "Open Sans", "sans-serif"].join(","),
    fontSize: 16,
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
