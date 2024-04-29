import { createTheme, ThemeProvider } from "@mui/material";
import { green, purple } from "@mui/material/colors";
import { GradientNavbar } from "./components/GradientNavbar";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const linksArray = ["Products", "Services", "Overview", "Contact Us"];

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GradientNavbar links={linksArray} />
      </ThemeProvider>
    </>
  );
}
